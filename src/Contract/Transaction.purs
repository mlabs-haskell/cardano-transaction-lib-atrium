-- | A module that defines the different transaction data types, balancing
-- | functionality, transaction fees, signing and submission.
module Contract.Transaction
  ( BalancedSignedTransaction(..)
  , balanceAndSignTx
  , balanceTx
  , balanceTxM
  , calculateMinFee
  , calculateMinFeeM
  , finalizeTx
  , module BalanceTxError
  , module ExportQueryM
  , module JsonWsp
  , module ReindexRedeemersExport
  , module ScriptLookups
  , module Transaction
  , module TxOutput
  , module UnbalancedTx
  , reindexSpentScriptRedeemers
  , signTransaction
  , signTransactionBytes
  , submit
  ) where

import Prelude

import BalanceTx (balanceTx) as BalanceTx
import BalanceTx (BalanceTxError) as BalanceTxError
import Contract.Monad (Contract, liftedE', liftedM)
import Data.Either (Either, hush)
import Data.Generic.Rep (class Generic)
import Data.Lens.Getter ((^.))
import Data.Maybe (Maybe)
import Data.Newtype (class Newtype, wrap)
import Data.Show.Generic (genericShow)
import Data.Tuple.Nested (type (/\))
import QueryM
  ( FeeEstimate(FeeEstimate)
  , ClientError(..) -- implicit as this error list will likely increase.
  , FinalizedTransaction(FinalizedTransaction)
  ) as ExportQueryM
import QueryM
  ( FinalizedTransaction(FinalizedTransaction)
  , calculateMinFee
  , signTransaction
  , signTransactionBytes
  , finalizeTx
  ) as QueryM
import QueryM.Submit (submit) as Submit
import ReindexRedeemers (reindexSpentScriptRedeemers) as ReindexRedeemers
import ReindexRedeemers
  ( ReindexErrors(CannotGetTxOutRefIndexForRedeemer)
  ) as ReindexRedeemersExport
import TxOutput -- Could potentially trim this down, -- FIX ME: https://github.com/Plutonomicon/cardano-browser-tx/issues/200
  ( ogmiosTxOutToScriptOutput
  , ogmiosTxOutToTransactionOutput
  , scriptOutputToOgmiosTxOut
  , scriptOutputToTransactionOutput
  , transactionInputToTxOutRef
  , transactionOutputToOgmiosTxOut
  , transactionOutputToScriptOutput
  , txOutRefToTransactionInput
  ) as TxOutput
import Types.ByteArray (ByteArray)
import Types.Datum (Datum)
import Types.JsonWsp (OgmiosTxOut, OgmiosTxOutRef) as JsonWsp -- FIX ME: https://github.com/Plutonomicon/cardano-browser-tx/issues/200
import Types.ScriptLookups (UnattachedUnbalancedTx(UnattachedUnbalancedTx))
import Types.ScriptLookups
  ( MkUnbalancedTxError(..) -- A lot errors so will refrain from explicit names.
  , mkUnbalancedTx
  ) as ScriptLookups
import Types.Transaction (Transaction, _body, _inputs)
import Types.Transaction -- Most re-exported, don't re-export `Redeemer` and associated lens.
  ( AuxiliaryData(AuxiliaryData)
  , AuxiliaryDataHash(AuxiliaryDataHash)
  , BootstrapWitness
  , Certificate
      ( StakeRegistration
      , StakeDeregistration
      , StakeDelegation
      , PoolRegistration
      , PoolRetirement
      , GenesisKeyDelegation
      , MoveInstantaneousRewardsCert
      )
  , CostModel(CostModel)
  , Costmdls(Costmdls)
  , DataHash(DataHash)
  , DatumHash
  , Ed25519Signature(Ed25519Signature)
  , Epoch(Epoch)
  , ExUnitPrices
  , ExUnits
  , GeneralTransactionMetadata(GeneralTransactionMetadata)
  , GenesisHash(GenesisHash)
  , Language(PlutusV1)
  , Mint(Mint)
  , NativeScript
      ( ScriptPubkey
      , ScriptAll
      , ScriptAny
      , ScriptNOfK
      , TimelockStart
      , TimelockExpiry
      )
  , Nonce(Nonce)
  , ProposedProtocolParameterUpdates(ProposedProtocolParameterUpdates)
  , ProtocolParamUpdate
  , ProtocolVersion
  , PublicKey(PublicKey)
  , Redeemer
  , RequiredSigner(RequiredSigner)
  , ScriptDataHash(ScriptDataHash)
  , SubCoin
  , Transaction(Transaction)
  , TransactionHash(TransactionHash)
  , TransactionInput(TransactionInput)
  , TransactionMetadatum
      ( MetadataMap
      , MetadataList
      , Int
      , Bytes
      , Text
      )
  , TransactionMetadatumLabel(TransactionMetadatumLabel)
  , TransactionOutput(TransactionOutput)
  , TransactionWitnessSet(TransactionWitnessSet)
  , TxBody(TxBody)
  , TxOut
  , UnitInterval
  , Update
  , Utxo
  , UtxoM(UtxoM)
  , Vkey(Vkey)
  , Vkeywitness(Vkeywitness)
  , _auxiliaryData
  , _auxiliaryDataHash
  , _body
  , _bootstraps
  , _certs
  , _collateral
  , _fee
  , _inputs
  , _isValid
  , _mint
  , _nativeScripts
  , _networkId
  , _outputs
  , _plutusData
  , _plutusScripts
  , _requiredSigners
  , _scriptDataHash
  , _ttl
  , _update
  , _validityStartInterval
  , _vkeys
  , _withdrawals
  , _witnessSet
  ) as Transaction
import Types.UnbalancedTransaction (UnbalancedTx)
import Types.UnbalancedTransaction
  ( ScriptOutput(ScriptOutput) -- More up-to-date Plutus uses this, wonder if we can just use `TransactionOutput`
  , TxOutRef
  , UnbalancedTx(UnbalancedTx)
  , _transaction
  , _utxoIndex
  , emptyUnbalancedTx
  ) as UnbalancedTx
import Types.Value (Coin)

-- | This module defines transaction-related requests. Currently signing and
-- | submission is done with Nami.

-- | Signs a `Transaction` with potential failure.
signTransaction :: Transaction -> Contract (Maybe Transaction)
signTransaction = wrap <<< QueryM.signTransaction

-- | Signs a `Transaction` with potential failure
signTransactionBytes :: ByteArray -> Contract (Maybe ByteArray)
signTransactionBytes = wrap <<< QueryM.signTransactionBytes

-- | Submits a Cbor-hex encoded transaction, which is the output of
-- | `signTransactionBytes` or `balanceAndSignTx`
submit :: ByteArray -> Contract String
submit = wrap <<< Submit.submit

-- | Query the Haskell server for the minimum transaction fee
calculateMinFee
  :: Transaction -> Contract (Either ExportQueryM.ClientError Coin)
calculateMinFee = wrap <<< QueryM.calculateMinFee

-- | Same as `calculateMinFee` hushing the error.
calculateMinFeeM
  :: Transaction -> Contract (Maybe Coin)
calculateMinFeeM = map hush <<< calculateMinFee

-- | Attempts to balance an `UnbalancedTx`.
balanceTx
  :: UnbalancedTx -> Contract (Either BalanceTxError.BalanceTxError Transaction)
balanceTx = wrap <<< BalanceTx.balanceTx

-- | Attempts to balance an `UnbalancedTx` hushing the error.
balanceTxM :: UnbalancedTx -> Contract (Maybe Transaction)
balanceTxM = map hush <<< balanceTx

finalizeTx
  :: Transaction.Transaction
  -> Array Datum
  -> Array Transaction.Redeemer
  -> Contract (Maybe QueryM.FinalizedTransaction)
finalizeTx tx datums redeemers = wrap $ QueryM.finalizeTx tx datums redeemers

-- | Reindex the `Spend` redeemers. Since we insert to an ordered array, we must
-- | reindex the redeemers with such inputs. This must be crucially called after
-- | balancing when all inputs are in place so they cannot be reordered.
reindexSpentScriptRedeemers
  :: Array Transaction.TransactionInput
  -> Array (Transaction.Redeemer /\ Maybe Transaction.TransactionInput)
  -> Contract
       ( Either
           ReindexRedeemersExport.ReindexErrors
           (Array Transaction.Redeemer)
       )
reindexSpentScriptRedeemers balancedTx =
  wrap <<< ReindexRedeemers.reindexSpentScriptRedeemers balancedTx

newtype BalancedSignedTransaction = BalancedSignedTransaction
  { transaction :: Transaction.Transaction -- the balanced and unsigned transaction to help with logging
  , signedTxCbor :: ByteArray -- the balanced and signed cbor ByteArray representation used in `submit`
  }

derive instance Generic BalancedSignedTransaction _
derive instance Newtype BalancedSignedTransaction _
derive newtype instance Eq BalancedSignedTransaction

instance Show BalancedSignedTransaction where
  show = genericShow

-- | A helper that wraps a few steps into: balance an unbalanced transaction
-- | (`balanceTx`), reindex script spend redeemers (not minting redeemers)
-- | (`reindexSpentScriptRedeemers`), attach datums and redeemers to the
-- | transaction (`finalizeTx`), and finally sign (`signTransactionBytes`).
-- | The return type includes the balanced (but unsigned) transaction for
-- | logging and more importantly, the `ByteArray` to be used with `Submit` to
-- | submit  the transaction.
balanceAndSignTx
  :: UnattachedUnbalancedTx
  -> Contract (Maybe BalancedSignedTransaction)
balanceAndSignTx
  (UnattachedUnbalancedTx { unbalancedTx, datums, redeemersTxIns }) = do
  -- Balance unbalanced tx:
  balancedTx <- liftedE' $ balanceTx unbalancedTx
  let inputs = balancedTx ^. _body <<< _inputs
  redeemers <- liftedE' $ reindexSpentScriptRedeemers inputs redeemersTxIns
  -- Reattach datums and redeemer:
  QueryM.FinalizedTransaction txCbor <-
    liftedM "balanceAndSignTx: Cannot attach datums and redeemer"
      (finalizeTx balancedTx datums redeemers)
  -- Sign the transaction returned as Cbor-hex encoded:
  signedTxCbor <- liftedM "balanceAndSignTx: Failed to sign transaction" $
    signTransactionBytes txCbor
  pure $ pure $ BalancedSignedTransaction
    { transaction: balancedTx, signedTxCbor }

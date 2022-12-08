module Ctl.Examples.Schnorr (contract) where

import Contract.Prelude

import Contract.Address (getNetworkId, validatorHashEnterpriseAddress)
import Contract.Crypto.Schnorr
  ( SchnorrPublicKey
  , SchnorrSignature
  , deriveSchnorrSecp256k1PublicKey
  , signSchnorrSecp256k1
  )
import Contract.Crypto.Utils (randomPrivateKey)
import Contract.Log (logInfo')
import Contract.Monad (Contract, liftContractM, liftedE)
import Contract.PlutusData
  ( class ToData
  , PlutusData(Constr)
  , Redeemer(Redeemer)
  , toData
  , unitDatum
  )
import Contract.Prim.ByteArray (ByteArray, byteArrayFromIntArrayUnsafe)
import Contract.ScriptLookups as Lookups
import Contract.Scripts (Validator, validatorHash)
import Contract.TextEnvelope (decodeTextEnvelope, plutusScriptV2FromEnvelope)
import Contract.Transaction
  ( TransactionHash
  , awaitTxConfirmed
  , balanceTx
  , signTransaction
  , submit
  )
import Contract.TxConstraints as Constraints
import Contract.Utxos (utxosAt)
import Contract.Value as Value
import Data.BigInt as BigInt
import Data.Map as Map
import Data.Set as Set

newtype SchnorrRedeemer = SchnorrRedeemer
  { msg :: ByteArray
  , sig :: SchnorrSignature
  , pk :: SchnorrPublicKey
  }

derive instance Generic SchnorrRedeemer _
derive instance Newtype SchnorrRedeemer _

instance ToData SchnorrRedeemer where
  toData (SchnorrRedeemer { msg, sig, pk }) = Constr zero
    [ toData msg, toData sig, toData pk ]

contract :: Contract () Unit
contract = do
  prepTest >>= traverse_ awaitTxConfirmed
  testSchnorr >>= awaitTxConfirmed

-- | Prepare the ECDSA test by locking some funds at the validator address if there is none
prepTest :: Contract () (Maybe TransactionHash)
prepTest = do
  validator <- liftContractM "Caonnot get validator" getValidator
  let
    valHash = validatorHash validator

  netId <- getNetworkId
  valAddr <- liftContractM "cannot get validator address"
    (validatorHashEnterpriseAddress netId valHash)

  scriptUtxos <- utxosAt valAddr

  if Map.isEmpty scriptUtxos then
    do
      let
        val = Value.lovelaceValueOf (BigInt.fromInt 1)

        lookups :: Lookups.ScriptLookups Void
        lookups = Lookups.validator validator

        constraints :: Constraints.TxConstraints Void Void
        constraints = Constraints.mustPayToScript valHash unitDatum
          Constraints.DatumInline
          val
      ubTx <- liftedE $ Lookups.mkUnbalancedTx lookups constraints
      bsTx <- liftedE $ balanceTx ubTx
      sgTx <- signTransaction bsTx
      txId <- submit sgTx
      logInfo' $ "Submitted Schnorr test preparation tx: " <> show txId
      awaitTxConfirmed txId
      logInfo' "Transaction confirmed."

      pure $ Just txId
  else
    pure Nothing

-- | Attempt to unlock one utxo using an ECDSA signature
testVerification :: SchnorrRedeemer → Contract () TransactionHash
testVerification ecdsaRed = do
  let red = Redeemer $ toData ecdsaRed

  validator <- liftContractM "Can't get validator" getValidator
  let valHash = validatorHash validator

  netId <- getNetworkId
  valAddr <- liftContractM "cannot get validator address"
    (validatorHashEnterpriseAddress netId valHash)

  scriptUtxos <- utxosAt valAddr
  txIn <- liftContractM "No UTxOs found at validator address"
    $ Set.findMin
    $ Map.keys scriptUtxos
  let
    lookups :: Lookups.ScriptLookups Void
    lookups = Lookups.validator validator
      <> Lookups.unspentOutputs scriptUtxos

    constraints :: Constraints.TxConstraints Void Void
    constraints = Constraints.mustSpendScriptOutput txIn red
  ubTx <- liftedE $ Lookups.mkUnbalancedTx lookups constraints
  bsTx <- liftedE $ balanceTx ubTx
  sgTx <- signTransaction bsTx
  txId <- submit sgTx
  logInfo' $ "Submitted Schnorr test verification tx: " <> show txId
  awaitTxConfirmed txId
  logInfo' "Transaction confirmed."
  pure txId

-- | Testing ECDSA verification function on-chain
testSchnorr :: Contract () TransactionHash
testSchnorr = do
  privateKey <- liftEffect $ randomPrivateKey
  let
    publicKey = deriveSchnorrSecp256k1PublicKey privateKey
    message = byteArrayFromIntArrayUnsafe [ 0, 1, 2, 3 ]
  signature <- liftAff $ signSchnorrSecp256k1 privateKey message
  testVerification $
    SchnorrRedeemer
      { msg: message
      , sig: signature
      , pk: publicKey
      }

getValidator :: Maybe Validator
getValidator = do
  decodeTextEnvelope validateSchnorr >>= plutusScriptV2FromEnvelope >>> map wrap

foreign import validateSchnorr :: String
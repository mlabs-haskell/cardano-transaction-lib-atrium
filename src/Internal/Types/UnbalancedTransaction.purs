module Ctl.Internal.Types.UnbalancedTransaction
  ( PaymentPubKey(PaymentPubKey)
  , ScriptDatum(ScriptDatum, ScriptDatumHash)
  , UnbalancedTx(UnbalancedTx)
  , emptyUnbalancedTx
  , payPubKeyRequiredSigner
  , payPubKeyVkey
  ) where

import Prelude

import Aeson (class EncodeAeson)
import Ctl.Internal.Cardano.Types.Transaction
  ( PublicKey
  , RequiredSigner(RequiredSigner)
  , Transaction
  , Vkey(Vkey)
  , convertPubKey
  )
import Ctl.Internal.Helpers (encodeTagged')
import Ctl.Internal.Serialization (publicKeyHash)
import Ctl.Internal.Types.Datum (DataHash, Datum)
import Data.Generic.Rep (class Generic)
import Data.Lens.Iso.Newtype (_Newtype)
import Data.Lens.Types (Lens')
import Data.Newtype (class Newtype)
import Data.Show.Generic (genericShow)

-- Plutus has a type called `PubKey` which we replace with `PublicKey`
newtype PaymentPubKey = PaymentPubKey PublicKey

derive instance Generic PaymentPubKey _
derive instance Newtype PaymentPubKey _
derive newtype instance Eq PaymentPubKey
derive newtype instance Ord PaymentPubKey

instance Show PaymentPubKey where
  show = genericShow

data ScriptDatum
  = ScriptDatum Datum
  | ScriptDatumHash DataHash

derive instance Eq ScriptDatum
derive instance Generic ScriptDatum _

instance EncodeAeson ScriptDatum where
  encodeAeson = case _ of
    ScriptDatum r -> encodeTagged' "ScriptDatum" r
    ScriptDatumHash r -> encodeTagged' "ScriptDatumHash" r

instance Show ScriptDatum where
  show = genericShow

payPubKeyVkey :: PaymentPubKey -> Vkey
payPubKeyVkey (PaymentPubKey pk) = Vkey pk

payPubKeyRequiredSigner :: PaymentPubKey -> RequiredSigner
payPubKeyRequiredSigner (PaymentPubKey pk) =
  RequiredSigner <<< publicKeyHash $ convertPubKey pk

-- | An unbalanced transaction. It needs to be balanced and signed before it
-- | can be submitted to the ledger.
-- | Resembles `UnbalancedTx` from `plutus-apps`.
newtype UnbalancedTx = UnbalancedTx Transaction

derive instance Newtype UnbalancedTx _
derive instance Generic UnbalancedTx _
derive newtype instance Eq UnbalancedTx

instance Show UnbalancedTx where
  show = genericShow

emptyUnbalancedTx :: UnbalancedTx
emptyUnbalancedTx = UnbalancedTx mempty

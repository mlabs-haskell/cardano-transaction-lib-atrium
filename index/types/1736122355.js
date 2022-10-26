// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1736122355"] = [{"values":[{"sourceSpan":{"start":[54,1],"name":".spago/functors/v4.1.1/src/Data/Functor/Product/Nested.purs","end":[54,38]},"score":6,"packageInfo":{"values":["functors"],"tag":"Package"},"name":"product1","moduleName":"Data.Functor.Product.Nested","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"a"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Product","Nested"],"Product1"]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[165,1],"name":".spago/free/v6.1.0/src/Data/Coyoneda.purs","end":[165,42]},"score":5,"packageInfo":{"values":["free"],"tag":"Package"},"name":"liftCoyoneda","moduleName":"Data.Coyoneda","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Coyoneda"],"Coyoneda"]},{"tag":"TypeVar","contents":"f"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lift a value described by the type constructor `f` to `Coyoneda f`.\n\nNote that for any functor `f` `liftCoyoneda` has a right inverse\n`lowerCoyoneda`:\n```purescript\nliftCoyoneda <<< lowerCoyoneda $ (Coyoneda e)\n= liftCoyoneda <<< unCoyoneda map $ (Coyoneda e)\n= liftCoyonead (runExists (\\(CoyonedaF k fi) -> map k fi) e)\n= liftCoyonead (Coyoneda e)\n= coyoneda identity (Coyoneda e)\n= Coyoneda e\n```\nMoreover if `f` is a `Functor` then `liftCoyoneda` is an isomorphism of\nfunctors with inverse `lowerCoyoneda`:  we already showed that\n`lowerCoyoneda <<< hoistCoyoneda identity = lowerCoyoneda` is its left inverse\nwhenever `f` is a functor.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[123,1],"name":".spago/free/v6.1.0/src/Control/Monad/Free.purs","end":[123,31]},"score":5,"packageInfo":{"values":["free"],"tag":"Package"},"name":"liftF","moduleName":"Control.Monad.Free","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Free"],"Free"]},{"tag":"TypeVar","contents":"f"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lift an impure value described by the generating type constructor `f` into\nthe free monad.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[79,1],"name":"src/Contract/Utxos.purs","end":[81,32]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"getWalletUtxos","moduleName":"Contract.Utxos","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Plutus","Types","Transaction"],"UtxoMap"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Similar to `utxosAt` called on own address, except that it uses CIP-30\nwallet state and not query layer state.\nThe user should not expect these states to be in sync.\nWhen active wallet is `KeyWallet`, query layer state is used.\nThis function is expected to be more performant than `utxosAt` when there\nis a large number of assets.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[68,1],"name":"src/Contract/Utxos.purs","end":[70,30]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"getWalletBalance","moduleName":"Contract.Utxos","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Plutus","Types","Value"],"Value"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[213,1],"name":"src/Contract/Monad.purs","end":[219,24]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"askConfig","moduleName":"Contract.Monad","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","TypeError"],"Warn"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim","TypeError"],"Text"]},{"tag":"TypeLevelString","contents":"User-defined configs are deprecated - https://github.com/Plutonomicon/cardano-transaction-lib/issues/734"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Same as `ask`, but points to the user config record.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[188,1],"name":"src/Contract/Address.purs","end":[188,81]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"ownStakePubKeyHash","moduleName":"Contract.Address","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","PubKeyHash"],"StakePubKeyHash"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[181,1],"name":"src/Contract/Address.purs","end":[181,71]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"ownPubKeyHash","moduleName":"Contract.Address","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","PubKeyHash"],"PubKeyHash"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Gets the wallet `PubKeyHash` via `getWalletAddress`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[173,1],"name":"src/Contract/Address.purs","end":[174,66]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"ownPaymentPubKeyHash","moduleName":"Contract.Address","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","PubKeyHash"],"PaymentPubKeyHash"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Gets the wallet `PaymentPubKeyHash` via `getWalletAddress`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[148,1],"name":"src/Contract/Address.purs","end":[149,70]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"getWalletAddressWithNetworkTag","moduleName":"Contract.Address","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Plutus","Types","Address"],"AddressWithNetworkTag"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get the `AddressWithNetworkTag` of the browser wallet.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[136,1],"name":"src/Contract/Address.purs","end":[137,56]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"getWalletAddress","moduleName":"Contract.Address","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Plutus","Types","Address"],"Address"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get the `Address` of the browser wallet.\n"}],"tag":"SearchResult"}]
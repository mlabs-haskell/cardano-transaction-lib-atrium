// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1736122355"] = [{"values":[{"sourceSpan":{"start":[54,1],"name":".spago/functors/v4.1.1/src/Data/Functor/Product/Nested.purs","end":[54,38]},"score":5,"packageInfo":{"values":["functors"],"tag":"Package"},"name":"product1","moduleName":"Data.Functor.Product.Nested","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"a"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Product","Nested"],"Product1"]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[165,1],"name":".spago/free/v6.1.0/src/Data/Coyoneda.purs","end":[165,42]},"score":5,"packageInfo":{"values":["free"],"tag":"Package"},"name":"liftCoyoneda","moduleName":"Data.Coyoneda","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Coyoneda"],"Coyoneda"]},{"tag":"TypeVar","contents":"f"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lift a value described by the type constructor `f` to `Coyoneda f`.\n\nNote that for any functor `f` `liftCoyoneda` has a right inverse\n`lowerCoyoneda`:\n```purescript\nliftCoyoneda <<< lowerCoyoneda $ (Coyoneda e)\n= liftCoyoneda <<< unCoyoneda map $ (Coyoneda e)\n= liftCoyonead (runExists (\\(CoyonedaF k fi) -> map k fi) e)\n= liftCoyonead (Coyoneda e)\n= coyoneda identity (Coyoneda e)\n= Coyoneda e\n```\nMoreover if `f` is a `Functor` then `liftCoyoneda` is an isomorphism of\nfunctors with inverse `lowerCoyoneda`:  we already showed that\n`lowerCoyoneda <<< hoistCoyoneda identity = lowerCoyoneda` is its left inverse\nwhenever `f` is a functor.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[123,1],"name":".spago/free/v6.1.0/src/Control/Monad/Free.purs","end":[123,31]},"score":5,"packageInfo":{"values":["free"],"tag":"Package"},"name":"liftF","moduleName":"Control.Monad.Free","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Free"],"Free"]},{"tag":"TypeVar","contents":"f"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lift an impure value described by the generating type constructor `f` into\nthe free monad.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[61,1],"name":"src/Contract/Utxos.purs","end":[63,30]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"getWalletBalance","moduleName":"Contract.Utxos","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Plutus","Types","Value"],"Value"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[170,1],"name":"src/Contract/Monad.purs","end":[176,24]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"askConfig","moduleName":"Contract.Monad","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","TypeError"],"Warn"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim","TypeError"],"Text"]},{"tag":"TypeLevelString","contents":"User-defined configs are deprecated - https://github.com/Plutonomicon/cardano-transaction-lib/issues/734"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Same as `ask`, but points to the user config record.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[151,1],"name":"src/Contract/Address.purs","end":[151,81]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"ownStakePubKeyHash","moduleName":"Contract.Address","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Types","PubKeyHash"],"StakePubKeyHash"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[148,1],"name":"src/Contract/Address.purs","end":[148,71]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"ownPubKeyHash","moduleName":"Contract.Address","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Types","PubKeyHash"],"PubKeyHash"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Gets the wallet `PubKeyHash` via `getWalletAddress`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[143,1],"name":"src/Contract/Address.purs","end":[144,66]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"ownPaymentPubKeyHash","moduleName":"Contract.Address","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Types","PubKeyHash"],"PaymentPubKeyHash"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Gets the wallet `PaymentPubKeyHash` via `getWalletAddress`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[116,1],"name":"src/Contract/Address.purs","end":[117,56]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"getWalletAddress","moduleName":"Contract.Address","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Plutus","Types","Address"],"Address"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get the `Address` of the browser wallet.\n"}],"tag":"SearchResult"}]
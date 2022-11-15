// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1736122355"] = [{"values":[{"sourceSpan":{"start":[42,1],"name":".spago/node-readline/v5.0.0/src/Node/ReadLine.purs","end":[42,57]},"score":0,"packageInfo":{"values":["node-readline"],"tag":"Package"},"name":"output","moduleName":"Node.ReadLine","info":{"values":[{"type":{"tag":"ForAll","contents":["w",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Options"],"Option"]},{"tag":"TypeConstructor","contents":[["Node","ReadLine"],"InterfaceOptions"]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","Stream"],"Writable"]},{"tag":"TypeVar","contents":"w"}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[54,1],"name":".spago/functors/v4.1.1/src/Data/Functor/Product/Nested.purs","end":[54,38]},"score":6,"packageInfo":{"values":["functors"],"tag":"Package"},"name":"product1","moduleName":"Data.Functor.Product.Nested","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"a"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Product","Nested"],"Product1"]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[165,1],"name":".spago/free/v6.2.0/src/Data/Coyoneda.purs","end":[165,42]},"score":5,"packageInfo":{"values":["free"],"tag":"Package"},"name":"liftCoyoneda","moduleName":"Data.Coyoneda","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Coyoneda"],"Coyoneda"]},{"tag":"TypeVar","contents":"f"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lift a value described by the type constructor `f` to `Coyoneda f`.\n\nNote that for any functor `f` `liftCoyoneda` has a right inverse\n`lowerCoyoneda`:\n```purescript\nliftCoyoneda <<< lowerCoyoneda $ (Coyoneda e)\n= liftCoyoneda <<< unCoyoneda map $ (Coyoneda e)\n= liftCoyonead (runExists (\\(CoyonedaF k fi) -> map k fi) e)\n= liftCoyonead (Coyoneda e)\n= coyoneda identity (Coyoneda e)\n= Coyoneda e\n```\nMoreover if `f` is a `Functor` then `liftCoyoneda` is an isomorphism of\nfunctors with inverse `lowerCoyoneda`:  we already showed that\n`lowerCoyoneda <<< hoistCoyoneda identity = lowerCoyoneda` is its left inverse\nwhenever `f` is a functor.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[123,1],"name":".spago/free/v6.2.0/src/Control/Monad/Free.purs","end":[123,31]},"score":5,"packageInfo":{"values":["free"],"tag":"Package"},"name":"liftF","moduleName":"Control.Monad.Free","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Free"],"Free"]},{"tag":"TypeVar","contents":"f"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lift an impure value described by the generating type constructor `f` into\nthe free monad.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[98,1],"name":"src/Contract/Wallet.purs","end":[98,63]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"getWallet","moduleName":"Contract.Wallet","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Wallet"],"Wallet"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[88,1],"name":"src/Contract/Wallet.purs","end":[88,73]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"getRewardAddresses","moduleName":"Contract.Wallet","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Address"],"Address"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[85,1],"name":"src/Contract/Wallet.purs","end":[85,71]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"getChangeAddress","moduleName":"Contract.Wallet","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Address"],"Address"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[82,1],"name":"src/Contract/Wallet.purs","end":[82,73]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"getUnusedAddresses","moduleName":"Contract.Wallet","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Address"],"Address"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[79,1],"name":"src/Contract/Utxos.purs","end":[81,32]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"getWalletUtxos","moduleName":"Contract.Utxos","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Plutus","Types","Transaction"],"UtxoMap"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Similar to `utxosAt` called on own address, except that it uses CIP-30\nwallet state and not query layer state.\nThe user should not expect these states to be in sync.\nWhen active wallet is `KeyWallet`, query layer state is used.\nThis function is expected to be more performant than `utxosAt` when there\nis a large number of assets.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[68,1],"name":"src/Contract/Utxos.purs","end":[70,30]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"getWalletBalance","moduleName":"Contract.Utxos","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Plutus","Types","Value"],"Value"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[21,1],"name":"src/Contract/Staking.purs","end":[21,72]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"getPoolIds","moduleName":"Contract.Staking","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Cardano","Types","Transaction"],"PoolPubKeyHash"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[212,1],"name":"src/Contract/Monad.purs","end":[218,24]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"askConfig","moduleName":"Contract.Monad","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","TypeError"],"Warn"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim","TypeError"],"Text"]},{"tag":"TypeLevelString","contents":"User-defined configs are deprecated - https://github.com/Plutonomicon/cardano-transaction-lib/issues/734"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Same as `ask`, but points to the user config record.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[207,1],"name":"src/Contract/Address.purs","end":[213,40]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"ownStakePubKeyHash","moduleName":"Contract.Address","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","TypeError"],"Warn"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim","TypeError"],"Text"]},{"tag":"TypeLevelString","contents":"This function returns only one `StakePubKeyHash` even in case multiple `StakePubKeysHash`es are available. Use `ownStakePubKeysHashes` instead"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","PubKeyHash"],"StakePubKeyHash"]}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[203,1],"name":"src/Contract/Address.purs","end":[204,66]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"ownPaymentPubKeysHashes","moduleName":"Contract.Address","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","PubKeyHash"],"PaymentPubKeyHash"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Gets all wallet `PaymentPubKeyHash`es via `getWalletAddresses`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[193,1],"name":"src/Contract/Address.purs","end":[199,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"ownPaymentPubKeyHash","moduleName":"Contract.Address","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","TypeError"],"Warn"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim","TypeError"],"Text"]},{"tag":"TypeLevelString","contents":"This function returns only one `PaymentPubKeyHash` even in case multiple `PaymentPubKeysHash`es are available. Use `ownPaymentPubKeysHashes` instead"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","PubKeyHash"],"PaymentPubKeyHash"]}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Gets a wallet `PaymentPubKeyHash` via `getWalletAddresses`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[164,1],"name":"src/Contract/Address.purs","end":[165,70]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"getWalletAddressesWithNetworkTag","moduleName":"Contract.Address","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Plutus","Types","Address"],"AddressWithNetworkTag"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get all the `AddressWithNetworkTag` of the browser wallet discarding errors.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[154,1],"name":"src/Contract/Address.purs","end":[160,46]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"getWalletAddressWithNetworkTag","moduleName":"Contract.Address","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","TypeError"],"Warn"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim","TypeError"],"Text"]},{"tag":"TypeLevelString","contents":"This function returns only one `AddressWithNetworkTag` even in case multiple `AddressWithNetworkTag` are available. Use `getWalletAddressesWithNetworkTag` instead"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Plutus","Types","Address"],"AddressWithNetworkTag"]}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get an `AddressWithNetworkTag` of the browser wallet.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[142,1],"name":"src/Contract/Address.purs","end":[143,56]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"getWalletAddresses","moduleName":"Contract.Address","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Plutus","Types","Address"],"Address"]}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get all the `Address`es of the browser wallet.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[132,1],"name":"src/Contract/Address.purs","end":[138,32]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"getWalletAddress","moduleName":"Contract.Address","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","TypeError"],"Warn"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim","TypeError"],"Text"]},{"tag":"TypeLevelString","contents":"This function returns only one `Adress` even in case multiple `Adress`es are available. Use `getWalletAdresses` instead"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Plutus","Types","Address"],"Address"]}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get an `Address` of the browser wallet.\n"}],"tag":"SearchResult"}]
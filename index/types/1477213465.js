// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1477213465"] = [{"values":[{"sourceSpan":{"start":[408,1],"name":"src/Internal/BalanceTx/CoinSelection.purs","end":[413,9]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"runRoundRobinM","moduleName":"Ctl.Internal.BalanceTx.CoinSelection","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ForAll","contents":["s",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","BalanceTx","CoinSelection"],"Processor"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"s"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"s"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Uses given processors to update the state sequentially.\nRemoves the processor from the list if applying it to the state returns\n`Nothing`. Each processor can only be applied once per round and is\ncarried over to the next round if it has successfully updated the state.\n\nWe use Round-robin processing to perform coin selection in multiple rounds,\nwhere a `Processor` runs a single selection step (`runSelectionStep`) for\nan asset from the set of all assets present in `requiredValue`.\nIt returns `Nothing` in case the selection for a particular asset is\nalready optimal and cannot be improved further.\n\nTaken from cardano-wallet:\nhttps://github.com/input-output-hk/cardano-wallet/blob/3395b6e4749544d552125dfd0e060437b5c18d5c/lib/coin-selection/lib/Cardano/CoinSelection/Balance.hs#L2155\n"}],"tag":"SearchResult"}]
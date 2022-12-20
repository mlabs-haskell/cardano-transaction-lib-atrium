// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1567426583"] = [{"values":[{"sourceSpan":{"start":[464,1],"name":"src/Contract/Transaction.purs","end":[468,41]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"balanceTxsWithConstraints","moduleName":"Contract.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ForAll","contents":["t",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Traversable"],"Traversable"],"constraintArgs":[{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"t"},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","ScriptLookups"],"UnattachedUnbalancedTx"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","BalanceTx","Constraints"],"BalanceTxConstraintsBuilder"]}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeConstructor","contents":[["Ctl","Internal","BalanceTx","Types"],"FinalizedTransaction"]}]}}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Balances each transaction using specified balancer constraint sets and\nlocks the used inputs so that they cannot be reused by subsequent\ntransactions.\n"}],"tag":"SearchResult"}]
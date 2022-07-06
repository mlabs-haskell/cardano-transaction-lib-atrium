// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1190345256"] = [{"values":[{"sourceSpan":{"start":[92,1],"name":".spago/sequences/v3.0.2/src/Data/Sequence/NonEmpty.purs","end":[92,47]},"score":0,"packageInfo":{"values":["sequences"],"tag":"Package"},"name":"uncons","moduleName":"Data.Sequence.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Sequence","NonEmpty"],"Seq"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Sequence"],"Seq"]},{"tag":"TypeVar","contents":"a"}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"O(1). Take one element off the left side of a Seq and return it, together\nwith the (possibly empty) remainder of the Seq.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[379,1],"name":"src/Contract/Transaction.purs","end":[382,50]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"balanceAndSignTxs","moduleName":"Contract.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Types","ScriptLookups"],"UnattachedUnbalancedTx"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Contract","Transaction"],"BalancedSignedTransaction"]}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Like `balanceAndSignTx`, but for more than one transaction.\nThis function may throw errors through the contract Monad.\nIf successful, transaction inputs will be locked afterwards.\nIf you want to re-use them in the same 'QueryM' context, call\n`unlockTransactionInputs`.\n"}],"tag":"SearchResult"}]
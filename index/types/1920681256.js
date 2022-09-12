// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1920681256"] = [{"values":[{"sourceSpan":{"start":[279,1],"name":"src/Contract/Transaction.purs","end":[282,55]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"calculateMinFee","moduleName":"Contract.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["QueryM"],"ClientError"]}]},{"tag":"TypeConstructor","contents":[["Plutus","Types","Value"],"Coin"]}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Query the Haskell server for the minimum transaction fee\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[300,1],"name":"src/Contract/Transaction.purs","end":[303,76]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"balanceTx","moduleName":"Contract.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Types","ScriptLookups"],"UnattachedUnbalancedTx"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["BalanceTx","Error"],"BalanceTxError"]}]},{"tag":"TypeConstructor","contents":[["BalanceTx","Types"],"FinalizedTransaction"]}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempts to balance an `UnattachedUnbalancedTx`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[537,1],"name":"src/Contract/Transaction.purs","end":[540,57]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"balanceAndSignTxE","moduleName":"Contract.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Types","ScriptLookups"],"UnattachedUnbalancedTx"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Effect","Exception"],"Error"]}]},{"tag":"TypeConstructor","contents":[["Contract","Transaction"],"BalancedSignedTransaction"]}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Like `balanceAndSignTx`, but does not throw errors, and which are instead\nheld in `Left`.\nIf successful, transaction inputs will be locked afterwards.\nIf you want to re-use them in the same 'QueryM' context, call\n`unlockTransactionInputs`.\n"}],"tag":"SearchResult"}]
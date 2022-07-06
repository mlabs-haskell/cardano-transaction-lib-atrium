// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1920681256"] = [{"values":[{"sourceSpan":{"start":[188,1],"name":"src/Contract/Transaction.purs","end":[191,55]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"calculateMinFee","moduleName":"Contract.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["QueryM"],"ClientError"]}]},{"tag":"TypeConstructor","contents":[["Plutus","Types","Value"],"Coin"]}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Query the Haskell server for the minimum transaction fee\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[209,1],"name":"src/Contract/Transaction.purs","end":[212,76]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"balanceTx","moduleName":"Contract.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Types","ScriptLookups"],"UnattachedUnbalancedTx"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["BalanceTx"],"BalanceTxError"]}]},{"tag":"TypeConstructor","contents":[["BalanceTx"],"FinalizedTransaction"]}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempts to balance an `UnattachedUnbalancedTx`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[394,1],"name":"src/Contract/Transaction.purs","end":[397,57]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"balanceAndSignTxE","moduleName":"Contract.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Types","ScriptLookups"],"UnattachedUnbalancedTx"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Effect","Exception"],"Error"]}]},{"tag":"TypeConstructor","contents":[["Contract","Transaction"],"BalancedSignedTransaction"]}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Balances an unbalanced transaction and signs it.\n\nThe return type includes the balanced (but unsigned) transaction for\nlogging and more importantly, the `ByteArray` to be used with `submit` to\nsubmit the transaction.\nIf successful, transaction inputs will be locked afterwards.\nIf you want to re-use them in the same 'QueryM' context, call\n`unlockTransactionInputs`.\n"}],"tag":"SearchResult"}]
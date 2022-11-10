// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["840695226"] = [{"values":[{"sourceSpan":{"start":[77,1],"name":"src/Contract/ScriptLookups.purs","end":[89,9]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"mkUnbalancedTx","moduleName":"Contract.ScriptLookups","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ForAll","contents":["validator",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["datum",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["redeemer",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Ctl","Internal","Types","TypedValidator"],"ValidatorTypes"],"constraintArgs":[{"tag":"TypeVar","contents":"validator"},{"tag":"TypeVar","contents":"datum"},{"tag":"TypeVar","contents":"redeemer"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Ctl","Internal","IsData"],"IsData"],"constraintArgs":[{"tag":"TypeVar","contents":"datum"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Ctl","Internal","IsData"],"IsData"],"constraintArgs":[{"tag":"TypeVar","contents":"redeemer"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","ScriptLookups"],"ScriptLookups"]},{"tag":"TypeVar","contents":"validator"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","TxConstraints"],"TxConstraints"]},{"tag":"TypeVar","contents":"redeemer"}]},{"tag":"TypeVar","contents":"datum"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","ScriptLookups"],"MkUnbalancedTxError"]}]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","ScriptLookups"],"UnattachedUnbalancedTx"]}]}}]}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create an `UnattachedUnbalancedTx` given `ScriptLookups` and\n`TxConstraints`. You will probably want to use this version as it returns\ndatums and redeemers that require attaching (and maybe reindexing) in\na separate call. In particular, this should be called in conjuction with\n`balanceTx` and  `signTransaction`.\n"}],"tag":"SearchResult"}]
// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["996053382"] = [{"values":[{"sourceSpan":{"start":[324,1],"name":"src/Contract/Test/Utils.purs","end":[329,18]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"withAssertions","moduleName":"Contract.Test.Utils","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["assertions",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Contract","Test","Utils"],"ContractAssertions"],"constraintArgs":[{"tag":"TypeVar","contents":"assertions"},{"tag":"TypeVar","contents":"r"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"assertions"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[441,1],"name":"src/Contract/Monad.purs","end":[445,18]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"liftContractE'","moduleName":"Contract.Monad","info":{"values":[{"type":{"tag":"ForAll","contents":["e",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Similar to `liftContractM`, throwing the string instead of the `Left`\nvalue. For throwing the `Left` value, see `liftEither` in\n`Contract.Prelude`.\n"}],"tag":"SearchResult"}]
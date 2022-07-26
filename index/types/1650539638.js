// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1650539638"] = [{"values":[{"sourceSpan":{"start":[57,1],"name":".spago/untagged-union/v0.3.0/src/Untagged/Union.purs","end":[57,66]},"score":0,"packageInfo":{"values":["untagged-union"],"tag":"Package"},"name":"asOneOf","moduleName":"Untagged.Union","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["h",{"tag":"ForAll","contents":["t",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Untagged","Castable"],"Castable"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Untagged","Union"],"OneOf"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"t"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Untagged","Union"],"OneOf"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"t"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[147,1],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Ops.purs","end":[147,59]},"score":1,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"divMod10","moduleName":"Data.Typelevel.Num.Ops","info":{"values":[{"type":{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["q",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Ops"],"DivMod10"],"constraintArgs":[{"tag":"TypeVar","contents":"x"},{"tag":"TypeVar","contents":"q"},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"q"}]},{"tag":"TypeVar","contents":"r"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[52,3],"name":".spago/profunctor-lenses/v7.0.1/src/Data/Lens/Index.purs","end":[52,34]},"score":1,"packageInfo":{"values":["profunctor-lenses"],"tag":"Package"},"name":"ix","moduleName":"Data.Lens.Index","info":{"values":[{"typeClassArguments":[["m",null],["a",null],["b",null]],"typeClass":[["Data","Lens","Index"],"Index"],"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Lens","Index"],"Index"],"constraintArgs":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Lens","Types"],"AffineTraversal'"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[332,1],"name":"src/Contract/Monad.purs","end":[333,81]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"throwContractError","moduleName":"Contract.Monad","info":{"values":[{"type":{"tag":"ForAll","contents":["e",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Show"],"Show"],"constraintArgs":[{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Throws an `Error` for any showable error using `Effect.Exception.throw`\nand lifting into the `Contract` monad.\n"}],"tag":"SearchResult"}]
// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1003197450"] = [{"values":[{"sourceSpan":{"start":[97,1],"name":".spago/prelude/v5.0.1/src/Data/Functor.purs","end":[97,58]},"score":84,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"flap","moduleName":"Data.Functor","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"b"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Apply a value in a computational context to a value in no context.\n\nGeneralizes `flip`.\n\n```purescript\nlongEnough :: String -> Bool\nhasSymbol :: String -> Bool\nhasDigit :: String -> Bool\npassword :: String\n\nvalidate :: String -> Array Bool\nvalidate = flap [longEnough, hasSymbol, hasDigit]\n```\n\n```purescript\nflap (-) 3 4 == 1\nthreeve <$> Just 1 <@> 'a' <*> Just true == Just (threeve 1 'a' true)\n```\n"}],"tag":"SearchResult"}]
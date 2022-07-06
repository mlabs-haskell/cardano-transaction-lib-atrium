// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1241525131"] = [{"values":[{"sourceSpan":{"start":[143,1],"name":".spago/record/v3.0.0/src/Record/Builder.purs","end":[148,37]},"score":5,"packageInfo":{"values":["record"],"tag":"Package"},"name":"disjointUnion","moduleName":"Record.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r3",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Union"],"constraintArgs":[{"tag":"TypeVar","contents":"r1"},{"tag":"TypeVar","contents":"r2"},{"tag":"TypeVar","contents":"r3"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Nub"],"constraintArgs":[{"tag":"TypeVar","contents":"r3"},{"tag":"TypeVar","contents":"r3"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Record","Builder"],"Builder"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r2"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r3"}]}}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Build by merging some disjoint set of fields from another record.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[135,1],"name":".spago/record/v3.0.0/src/Record/Builder.purs","end":[139,37]},"score":5,"packageInfo":{"values":["record"],"tag":"Package"},"name":"union","moduleName":"Record.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r3",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Union"],"constraintArgs":[{"tag":"TypeVar","contents":"r1"},{"tag":"TypeVar","contents":"r2"},{"tag":"TypeVar","contents":"r3"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Record","Builder"],"Builder"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r2"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r3"}]}}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Build by merging existing fields from another record, taking precedence\nin the case of overlaps. Unlike `merge`, this does not remove duplicate\nlabels from the resulting record type. This can result in better inference\nfor some pipelines, deferring the need for a `Nub` constraint.\n\nFor example:\n\n```purescript\nbuild (union { x: 1, y: \"y\" }) { y: 2, z: true }\n :: { x :: Int, y :: String, y :: Int, z :: Boolean }\n```\n"}],"tag":"SearchResult"}]
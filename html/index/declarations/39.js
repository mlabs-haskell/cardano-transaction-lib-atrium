// This file was generated by purescript-docs-search.
window.DocsSearchIndex["39"] = [["wx",[{"values":[{"sourceSpan":null,"score":1,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"WX","moduleName":"Node.FS","info":{"values":[{"arguments":[]}],"tag":"DataConstructorResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["wx_plus",[{"values":[{"sourceSpan":null,"score":1,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"WX_PLUS","moduleName":"Node.FS","info":{"values":[{"arguments":[]}],"tag":"DataConstructorResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["^-",[{"values":[{"sourceSpan":{"start":[112,1],"name":"src/Types/Natural.purs","end":[112,21]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"(^-)","moduleName":"Types.Natural","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["\\/",[{"values":[{"sourceSpan":{"start":[30,1],"name":".spago/either/v5.0.0/src/Data/Either/Nested.purs","end":[30,27]},"score":27,"packageInfo":{"values":["either"],"tag":"Package"},"name":"type (\\/)","moduleName":"Data.Either.Nested","info":{"values":[],"tag":"TypeAliasResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[47,1],"name":".spago/either/v5.0.0/src/Data/Either/Nested.purs","end":[47,22]},"score":27,"packageInfo":{"values":["either"],"tag":"Package"},"name":"(\\/)","moduleName":"Data.Either.Nested","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":"The `\\/` operator alias for the `either` function allows easy matching on nested Eithers. For example, consider the function\n\n```purescript\nf :: (Int \\/ String \\/ Boolean) -> String\nf (Left x) = show x\nf (Right (Left y)) = y\nf (Right (Right z)) = if z then \"Yes\" else \"No\"\n```\n\nThe `\\/` operator alias allows us to rewrite this function as\n\n```purescript\nf :: (Int \\/ String \\/ Boolean) -> String\nf = show \\/ identity \\/ if _ then \"Yes\" else \"No\"\n```\n"}],"tag":"SearchResult"}]],["?~",[{"values":[{"sourceSpan":{"start":[43,1],"name":".spago/profunctor-lenses/v7.0.1/src/Data/Lens/Setter.purs","end":[43,23]},"score":1,"packageInfo":{"values":["profunctor-lenses"],"tag":"Package"},"name":"(?~)","moduleName":"Data.Lens.Setter","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]],["/\\",[{"values":[{"sourceSpan":{"start":[67,1],"name":".spago/tuples/v6.0.1/src/Data/Tuple/Nested.purs","end":[67,21]},"score":31,"packageInfo":{"values":["tuples"],"tag":"Package"},"name":"(/\\)","moduleName":"Data.Tuple.Nested","info":{"values":[],"tag":"ValueAliasResult"},"hashAnchor":"v","comments":"Shorthand for constructing n-tuples as nested pairs.\n`a /\\ b /\\ c /\\ d /\\ unit` becomes `Tuple a (Tuple b (Tuple c (Tuple d unit)))`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[72,1],"name":".spago/tuples/v6.0.1/src/Data/Tuple/Nested.purs","end":[72,26]},"score":31,"packageInfo":{"values":["tuples"],"tag":"Package"},"name":"type (/\\)","moduleName":"Data.Tuple.Nested","info":{"values":[],"tag":"TypeAliasResult"},"hashAnchor":"t","comments":"Shorthand for constructing n-tuple types as nested pairs.\n`forall a b c d. a /\\ b /\\ c /\\ d /\\ Unit` becomes\n`forall a b c d. Tuple a (Tuple b (Tuple c (Tuple d Unit)))`\n"}],"tag":"SearchResult"}]]]
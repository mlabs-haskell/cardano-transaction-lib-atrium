// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["95842144"] = [{"values":[{"sourceSpan":{"start":[31,1],"name":".spago/mote/v1.1.0/src/Mote/Plan.purs","end":[38,7]},"score":0,"packageInfo":{"values":["mote"],"tag":"Package"},"name":"foldPlan","moduleName":"Mote.Plan","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["i",{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Mote","Entry"],"Entry"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"t"}]}]},{"tag":"TypeVar","contents":"i"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"i"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Mote","Entry"],"Entry"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Mote","Plan"],"Plan"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"t"}]}}]}]},{"tag":"TypeVar","contents":"i"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"i"}]}]},{"tag":"TypeVar","contents":"r"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Mote","Plan"],"Plan"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"t"}]}]},{"tag":"TypeVar","contents":"r"}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Eliminates each `PlanItem` constructor and sequences actions within a\n`Plan`.\n\nThis function can be used to inspect the plan, or build derivatives of it,\nor to define an interpreter for the plan that will actually run the tests\nwithin.\n\n- The first function handles tests.\n- The second function handles skipped tests.\n- The third function handles groups of tests.\n- The fourth function deals with sequencing the resulting values from the\n  previous handlers.\n\nThis fold only applies one layer at a time, so when building an interpreter\nit will need to be called recursively within the group handler.\n"}],"tag":"SearchResult"}]
// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["862473506"] = [{"values":[{"sourceSpan":{"start":[90,1],"name":".spago/untagged-union/v0.3.0/src/Untagged/TypeCheck.purs","end":[90,53]},"score":0,"packageInfo":{"values":["untagged-union"],"tag":"Package"},"name":"cast","moduleName":"Untagged.TypeCheck","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["x",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Untagged","TypeCheck"],"HasRuntimeType"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"x"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[189,1],"name":"src/Types/UsedTxOuts.purs","end":[194,12]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"unlockTxOutKeys","moduleName":"Types.UsedTxOuts","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Reader","Class"],"MonadAsk"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Types","UsedTxOuts"],"UsedTxOuts"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Class"],"MonadEffect"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Types","UsedTxOuts"],"TxOutRefUnlockKeys"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Remove used marks from all inputs that are saved in a `TxOutRefUnlockKeys`.\nUse this on the result of a previous `lockTransactionInputs`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[107,1],"name":".spago/pipes/v7.0.1/src/Pipes.purs","end":[107,46]},"score":1,"packageInfo":{"values":["pipes"],"tag":"Package"},"name":"discard","moduleName":"Pipes","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Discards a value\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[99,1],"name":".spago/node-buffer/v7.0.1/src/Node/Buffer/Internal.purs","end":[99,46]},"score":3,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"size","moduleName":"Node.Buffer.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"buf"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[65,1],"name":".spago/node-buffer/v7.0.1/src/Node/Buffer/Internal.purs","end":[65,63]},"score":3,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"toArrayBuffer","moduleName":"Node.Buffer.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"buf"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","ArrayBuffer","Types"],"ArrayBuffer"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[62,1],"name":".spago/node-buffer/v7.0.1/src/Node/Buffer/Internal.purs","end":[62,65]},"score":3,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"fromArrayBuffer","moduleName":"Node.Buffer.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","ArrayBuffer","Types"],"ArrayBuffer"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"buf"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[51,1],"name":".spago/node-buffer/v7.0.1/src/Node/Buffer/Internal.purs","end":[51,48]},"score":3,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"create","moduleName":"Node.Buffer.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"buf"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[42,1],"name":".spago/node-buffer/v7.0.1/src/Node/Buffer/Internal.purs","end":[42,64]},"score":3,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"unsafeThaw","moduleName":"Node.Buffer.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Buffer","Immutable"],"ImmutableBuffer"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"buf"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[39,1],"name":".spago/node-buffer/v7.0.1/src/Node/Buffer/Internal.purs","end":[39,66]},"score":3,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"unsafeFreeze","moduleName":"Node.Buffer.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"buf"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Node","Buffer","Immutable"],"ImmutableBuffer"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[101,3],"name":".spago/node-buffer/v7.0.1/src/Node/Buffer/Class.purs","end":[101,23]},"score":3,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"size","moduleName":"Node.Buffer.Class","info":{"values":[{"typeClassArguments":[["buf",null],["m",null]],"typeClass":[["Node","Buffer","Class"],"MutableBuffer"],"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Node","Buffer","Class"],"MutableBuffer"],"constraintArgs":[{"tag":"TypeVar","contents":"buf"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"buf"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":"Returns the size of a buffer.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[68,3],"name":".spago/node-buffer/v7.0.1/src/Node/Buffer/Class.purs","end":[68,40]},"score":3,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"toArrayBuffer","moduleName":"Node.Buffer.Class","info":{"values":[{"typeClassArguments":[["buf",null],["m",null]],"typeClass":[["Node","Buffer","Class"],"MutableBuffer"],"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Node","Buffer","Class"],"MutableBuffer"],"constraintArgs":[{"tag":"TypeVar","contents":"buf"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"buf"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","ArrayBuffer","Types"],"ArrayBuffer"]}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":"Copies the data in the buffer to a new JS ArrayBuffer\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[65,3],"name":".spago/node-buffer/v7.0.1/src/Node/Buffer/Class.purs","end":[65,42]},"score":3,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"fromArrayBuffer","moduleName":"Node.Buffer.Class","info":{"values":[{"typeClassArguments":[["buf",null],["m",null]],"typeClass":[["Node","Buffer","Class"],"MutableBuffer"],"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Node","Buffer","Class"],"MutableBuffer"],"constraintArgs":[{"tag":"TypeVar","contents":"buf"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","ArrayBuffer","Types"],"ArrayBuffer"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"buf"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":"Creates a buffer view from a JS ArrayByffer without copying data.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[55,3],"name":".spago/node-buffer/v7.0.1/src/Node/Buffer/Class.purs","end":[55,41]},"score":3,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"unsafeThaw","moduleName":"Node.Buffer.Class","info":{"values":[{"typeClassArguments":[["buf",null],["m",null]],"typeClass":[["Node","Buffer","Class"],"MutableBuffer"],"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Node","Buffer","Class"],"MutableBuffer"],"constraintArgs":[{"tag":"TypeVar","contents":"buf"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Buffer","Immutable"],"ImmutableBuffer"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"buf"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":"O(1) Convert an immutable buffer to a mutable buffer, without copying. The\ninput buffer must not be used afterward.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[51,3],"name":".spago/node-buffer/v7.0.1/src/Node/Buffer/Class.purs","end":[51,35]},"score":3,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"thaw","moduleName":"Node.Buffer.Class","info":{"values":[{"typeClassArguments":[["buf",null],["m",null]],"typeClass":[["Node","Buffer","Class"],"MutableBuffer"],"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Node","Buffer","Class"],"MutableBuffer"],"constraintArgs":[{"tag":"TypeVar","contents":"buf"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Buffer","Immutable"],"ImmutableBuffer"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"buf"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":"Creates a mutable copy of an immutable buffer.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[48,3],"name":".spago/node-buffer/v7.0.1/src/Node/Buffer/Class.purs","end":[48,43]},"score":3,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"unsafeFreeze","moduleName":"Node.Buffer.Class","info":{"values":[{"typeClassArguments":[["buf",null],["m",null]],"typeClass":[["Node","Buffer","Class"],"MutableBuffer"],"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Node","Buffer","Class"],"MutableBuffer"],"constraintArgs":[{"tag":"TypeVar","contents":"buf"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"buf"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Node","Buffer","Immutable"],"ImmutableBuffer"]}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":"O(1). Convert a mutable buffer to an immutable buffer, without copying. The\nmutable buffer must not be mutated afterwards.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[44,3],"name":".spago/node-buffer/v7.0.1/src/Node/Buffer/Class.purs","end":[44,37]},"score":3,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"freeze","moduleName":"Node.Buffer.Class","info":{"values":[{"typeClassArguments":[["buf",null],["m",null]],"typeClass":[["Node","Buffer","Class"],"MutableBuffer"],"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Node","Buffer","Class"],"MutableBuffer"],"constraintArgs":[{"tag":"TypeVar","contents":"buf"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"buf"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Node","Buffer","Immutable"],"ImmutableBuffer"]}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":"Creates an immutable copy of a mutable buffer.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[41,3],"name":".spago/node-buffer/v7.0.1/src/Node/Buffer/Class.purs","end":[41,25]},"score":3,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"create","moduleName":"Node.Buffer.Class","info":{"values":[{"typeClassArguments":[["buf",null],["m",null]],"typeClass":[["Node","Buffer","Class"],"MutableBuffer"],"type":{"tag":"ForAll","contents":["buf",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Node","Buffer","Class"],"MutableBuffer"],"constraintArgs":[{"tag":"TypeVar","contents":"buf"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"buf"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":"Creates a new buffer of the specified size.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[226,1],"name":"src/FromData.purs","end":[231,13]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"genericFromData","moduleName":"FromData","info":{"values":[{"type":{"tag":"ForAll","contents":["t",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["rep",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["FromData"],"FromDataWithSchema"],"constraintArgs":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Types","PlutusData"],"PlutusData"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"t"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[30,1],"name":".spago/console/v5.0.0/src/Effect/Class/Console.purs","end":[30,63]},"score":66,"packageInfo":{"values":["console"],"tag":"Package"},"name":"infoShow","moduleName":"Effect.Class.Console","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Class"],"MonadEffect"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Show"],"Show"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[24,1],"name":".spago/console/v5.0.0/src/Effect/Class/Console.purs","end":[24,64]},"score":66,"packageInfo":{"values":["console"],"tag":"Package"},"name":"errorShow","moduleName":"Effect.Class.Console","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Class"],"MonadEffect"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Show"],"Show"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[18,1],"name":".spago/console/v5.0.0/src/Effect/Class/Console.purs","end":[18,63]},"score":66,"packageInfo":{"values":["console"],"tag":"Package"},"name":"warnShow","moduleName":"Effect.Class.Console","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Class"],"MonadEffect"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Show"],"Show"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[12,1],"name":".spago/console/v5.0.0/src/Effect/Class/Console.purs","end":[12,62]},"score":66,"packageInfo":{"values":["console"],"tag":"Package"},"name":"logShow","moduleName":"Effect.Class.Console","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Class"],"MonadEffect"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Show"],"Show"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[38,1],"name":".spago/debug/v5.0.0/src/Debug.purs","end":[38,61]},"score":0,"packageInfo":{"values":["debug"],"tag":"Package"},"name":"traceM","moduleName":"Debug","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Debug"],"DebugWarning"],"constraintArgs":[]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Log any PureScript value to the console and return the unit value of the\nMonad `m`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[96,1],"name":".spago/unfoldable/v5.0.0/src/Data/Unfoldable1.purs","end":[96,51]},"score":13,"packageInfo":{"values":["unfoldable"],"tag":"Package"},"name":"singleton","moduleName":"Data.Unfoldable1","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable1"],"Unfoldable1"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Contain a single value. For example:\n\n``` purescript\nsingleton \"foo\" == (NEL.singleton \"foo\" :: NEL.NonEmptyList String)\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[239,1],"name":".spago/enums/v5.0.0/src/Data/Enum.purs","end":[239,69]},"score":10,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"downFromIncluding","moduleName":"Data.Enum","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["u",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Enum"],"Enum"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable1"],"Unfoldable1"],"constraintArgs":[{"tag":"TypeVar","contents":"u"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"u"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Produces all predecessors of an `Enum` value, including the start value.\n\n`downFromIncluding top` will return all values in an `Enum`, in reverse\norder.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[232,1],"name":".spago/enums/v5.0.0/src/Data/Enum.purs","end":[232,59]},"score":10,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"downFrom","moduleName":"Data.Enum","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["u",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Enum"],"Enum"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable"],"Unfoldable"],"constraintArgs":[{"tag":"TypeVar","contents":"u"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"u"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Produces all predecessors of an `Enum` value, excluding the start value.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[228,1],"name":".spago/enums/v5.0.0/src/Data/Enum.purs","end":[228,62]},"score":10,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"upFromIncluding","moduleName":"Data.Enum","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["u",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Enum"],"Enum"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable1"],"Unfoldable1"],"constraintArgs":[{"tag":"TypeVar","contents":"u"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"u"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Produces all successors of an `Enum` value, including the start value.\n\n`upFromIncluding bottom` will return all values in an `Enum`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[222,1],"name":".spago/enums/v5.0.0/src/Data/Enum.purs","end":[222,57]},"score":10,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"upFrom","moduleName":"Data.Enum","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["u",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Enum"],"Enum"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable"],"Unfoldable"],"constraintArgs":[{"tag":"TypeVar","contents":"u"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"u"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Produces all successors of an `Enum` value, excluding the start value.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[112,1],"name":".spago/enums/v5.0.0/src/Data/Enum/Generic.purs","end":[112,89]},"score":10,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"genericToEnum","moduleName":"Data.Enum.Generic","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["rep",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Enum","Generic"],"GenericBoundedEnum"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `toEnum` member from the `BoundedEnum`\ntype class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[53,1],"name":".spago/enums/v5.0.0/src/Data/Enum/Generic.purs","end":[53,78]},"score":10,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"genericSucc","moduleName":"Data.Enum.Generic","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["rep",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Enum","Generic"],"GenericEnum"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `succ` member from the `Enum` type class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[49,1],"name":".spago/enums/v5.0.0/src/Data/Enum/Generic.purs","end":[49,78]},"score":10,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"genericPred","moduleName":"Data.Enum.Generic","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["rep",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Generic","Rep"],"Generic"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"rep"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Enum","Generic"],"GenericEnum"],"constraintArgs":[{"tag":"TypeVar","contents":"rep"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Generic` implementation of the `pred` member from the `Enum` type class.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[10,3],"name":".spago/either/v5.0.0/src/Data/Either/Inject.purs","end":[10,22]},"score":27,"packageInfo":{"values":["either"],"tag":"Package"},"name":"prj","moduleName":"Data.Either.Inject","info":{"values":[{"typeClassArguments":[["a",null],["b",null]],"typeClass":[["Data","Either","Inject"],"Inject"],"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Either","Inject"],"Inject"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[20,3],"name":".spago/transformers/v5.2.0/src/Control/Monad/Writer/Class.purs","end":[20,22]},"score":16,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"tell","moduleName":"Control.Monad.Writer.Class","info":{"values":[{"typeClassArguments":[["w",null],["m",null]],"typeClass":[["Control","Monad","Writer","Class"],"MonadTell"],"type":{"tag":"ForAll","contents":["w",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Writer","Class"],"MonadTell"],"constraintArgs":[{"tag":"TypeVar","contents":"w"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[36,1],"name":".spago/transformers/v5.2.0/src/Control/Monad/State/Class.purs","end":[36,49]},"score":16,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"put","moduleName":"Control.Monad.State.Class","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["s",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","State","Class"],"MonadState"],"constraintArgs":[{"tag":"TypeVar","contents":"s"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Set the state.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[34,3],"name":".spago/prelude/v5.0.1/src/Control/Applicative.purs","end":[34,29]},"score":75,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"pure","moduleName":"Control.Applicative","info":{"values":[{"typeClassArguments":[["f",null]],"typeClass":[["Control","Applicative"],"Applicative"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Applicative"],"Applicative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]
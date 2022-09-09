// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2059080167"] = [{"values":[{"sourceSpan":{"start":[139,1],"name":"src/Types/Cbor.purs","end":[139,55]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"toByteArray","moduleName":"Types.Cbor","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Types","Cbor"],"Cbor"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Types","Cbor"],"CborParseError"]}]},{"tag":"TypeConstructor","contents":[["Types","ByteArray"],"ByteArray"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Extract a `ByteArray` if the `Cbor` was a byte string\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[250,1],"name":"src/QueryM/Ogmios.purs","end":[251,59]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"mempoolSnapshotHasTxCall","moduleName":"QueryM.Ogmios","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["QueryM","Ogmios"],"MempoolSnapshotAcquired"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["QueryM","JsonWsp"],"JsonWspCall"]},{"tag":"TypeConstructor","contents":[["QueryM","Ogmios"],"TxHash"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[132,1],"name":"src/QueryM/JsonWsp.purs","end":[134,39]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"parseJsonWspResponseId","moduleName":"QueryM.JsonWsp","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeConstructor","contents":[["QueryM","UniqueId"],"ListenerId"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Parse just ID from the response\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[197,1],"name":"src/Plutus/Types/Value.purs","end":[197,33]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"split","moduleName":"Plutus.Types.Value","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Plutus","Types","Value"],"Value"]}]},{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeConstructor","contents":[["Plutus","Types","Value"],"Value"]},{"tag":"TypeConstructor","contents":[["Plutus","Types","Value"],"Value"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Splits a value into its positive and non-positive parts. The first element of\nthe tuple contains the non-positive parts of the value, the second element\ncontains the positive parts. The convention is non-positive parts are\nnegated to make them positive in the output.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[59,1],"name":"examples/AlwaysSucceeds.purs","end":[59,68]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"payToAlwaysSucceeds","moduleName":"Examples.AlwaysSucceeds","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Types","Scripts"],"ValidatorHash"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"REmpty","contents":{}}]},{"tag":"TypeConstructor","contents":[["Types","Transaction"],"TransactionHash"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[59,1],"name":".spago/datetime/v5.0.2/src/Data/Interval/Duration/Iso.purs","end":[59,55]},"score":8,"packageInfo":{"values":["datetime"],"tag":"Package"},"name":"mkIsoDuration","moduleName":"Data.Interval.Duration.Iso","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Interval","Duration"],"Duration"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Interval","Duration","Iso"],"Errors"]}]},{"tag":"TypeConstructor","contents":[["Data","Interval","Duration","Iso"],"IsoDuration"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[96,1],"name":".spago/http-methods/v5.0.0/src/Data/HTTP/Method.purs","end":[96,51]},"score":2,"packageInfo":{"values":["http-methods"],"tag":"Package"},"name":"fromString","moduleName":"Data.HTTP.Method","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","HTTP","Method"],"Method"]}]},{"tag":"TypeConstructor","contents":[["Data","HTTP","Method"],"CustomMethod"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[11,1],"name":".spago/argonaut-core/v6.0.0/src/Data/Argonaut/Parser.purs","end":[11,43]},"score":4,"packageInfo":{"values":["argonaut-core"],"tag":"Package"},"name":"jsonParser","moduleName":"Data.Argonaut.Parser","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Parse a JSON string, constructing the `Json` value described by the string.\nTo convert a string into a `Json` string, see `fromString`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[13,1],"name":".spago/argonaut-codecs/v8.1.0/src/Data/Argonaut/Decode/Parser.purs","end":[13,51]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"parseJson","moduleName":"Data.Argonaut.Decode.Parser","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt to parse a string as `Json`, failing with a typed error if the\nJSON string is malformed.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[201,1],"name":".spago/argonaut-codecs/v8.1.0/src/Data/Argonaut/Decode/Decoders.purs","end":[201,50]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"decodeVoid","moduleName":"Data.Argonaut.Decode.Decoders","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeConstructor","contents":[["Data","Void"],"Void"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[146,1],"name":".spago/argonaut-codecs/v8.1.0/src/Data/Argonaut/Decode/Decoders.purs","end":[146,60]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"decodeCodePoint","moduleName":"Data.Argonaut.Decode.Decoders","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeConstructor","contents":[["Data","String","CodePoints"],"CodePoint"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[89,1],"name":".spago/argonaut-codecs/v8.1.0/src/Data/Argonaut/Decode/Decoders.purs","end":[89,70]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"decodeNonEmptyString","moduleName":"Data.Argonaut.Decode.Decoders","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[86,1],"name":".spago/argonaut-codecs/v8.1.0/src/Data/Argonaut/Decode/Decoders.purs","end":[86,54]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"decodeString","moduleName":"Data.Argonaut.Decode.Decoders","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[83,1],"name":".spago/argonaut-codecs/v8.1.0/src/Data/Argonaut/Decode/Decoders.purs","end":[83,48]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"decodeInt","moduleName":"Data.Argonaut.Decode.Decoders","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[80,1],"name":".spago/argonaut-codecs/v8.1.0/src/Data/Argonaut/Decode/Decoders.purs","end":[80,54]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"decodeNumber","moduleName":"Data.Argonaut.Decode.Decoders","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Number"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[77,1],"name":".spago/argonaut-codecs/v8.1.0/src/Data/Argonaut/Decode/Decoders.purs","end":[77,56]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"decodeBoolean","moduleName":"Data.Argonaut.Decode.Decoders","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[74,1],"name":".spago/argonaut-codecs/v8.1.0/src/Data/Argonaut/Decode/Decoders.purs","end":[74,50]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"decodeNull","moduleName":"Data.Argonaut.Decode.Decoders","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[74,1],"name":"src/Cardano/TextEnvelope.purs","end":[75,58]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"decodeTextEnvelope","moduleName":"Cardano.TextEnvelope","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Cardano","TextEnvelope"],"TextEnvelopeDecodeError"]}]},{"tag":"TypeConstructor","contents":[["Cardano","TextEnvelope"],"TextEnvelope"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[166,1],"name":".spago/aeson/8e9d42980e824450c18c397295573160d1ce8424/src/Aeson.purs","end":[166,65]},"score":0,"packageInfo":{"values":["aeson"],"tag":"Package"},"name":"parseJsonStringToAeson","moduleName":"Aeson","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[206,1],"name":".spago/aeson-helpers/44d0dae060cf78babd4534320192b58c16a6f45b/src/Aeson/Decode/Decoders.purs","end":[206,51]},"score":0,"packageInfo":{"values":["aeson-helpers"],"tag":"Package"},"name":"decodeVoid","moduleName":"Aeson.Decode.Decoders","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeConstructor","contents":[["Data","Void"],"Void"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[151,1],"name":".spago/aeson-helpers/44d0dae060cf78babd4534320192b58c16a6f45b/src/Aeson/Decode/Decoders.purs","end":[151,61]},"score":0,"packageInfo":{"values":["aeson-helpers"],"tag":"Package"},"name":"decodeCodePoint","moduleName":"Aeson.Decode.Decoders","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeConstructor","contents":[["Data","String","CodePoints"],"CodePoint"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[94,1],"name":".spago/aeson-helpers/44d0dae060cf78babd4534320192b58c16a6f45b/src/Aeson/Decode/Decoders.purs","end":[94,71]},"score":0,"packageInfo":{"values":["aeson-helpers"],"tag":"Package"},"name":"decodeNonEmptyString","moduleName":"Aeson.Decode.Decoders","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[91,1],"name":".spago/aeson-helpers/44d0dae060cf78babd4534320192b58c16a6f45b/src/Aeson/Decode/Decoders.purs","end":[91,55]},"score":0,"packageInfo":{"values":["aeson-helpers"],"tag":"Package"},"name":"decodeString","moduleName":"Aeson.Decode.Decoders","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[88,1],"name":".spago/aeson-helpers/44d0dae060cf78babd4534320192b58c16a6f45b/src/Aeson/Decode/Decoders.purs","end":[88,49]},"score":0,"packageInfo":{"values":["aeson-helpers"],"tag":"Package"},"name":"decodeInt","moduleName":"Aeson.Decode.Decoders","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[83,1],"name":".spago/aeson-helpers/44d0dae060cf78babd4534320192b58c16a6f45b/src/Aeson/Decode/Decoders.purs","end":[83,55]},"score":0,"packageInfo":{"values":["aeson-helpers"],"tag":"Package"},"name":"decodeNumber","moduleName":"Aeson.Decode.Decoders","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Number"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[80,1],"name":".spago/aeson-helpers/44d0dae060cf78babd4534320192b58c16a6f45b/src/Aeson/Decode/Decoders.purs","end":[80,57]},"score":0,"packageInfo":{"values":["aeson-helpers"],"tag":"Package"},"name":"decodeBoolean","moduleName":"Aeson.Decode.Decoders","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[77,1],"name":".spago/aeson-helpers/44d0dae060cf78babd4534320192b58c16a6f45b/src/Aeson/Decode/Decoders.purs","end":[77,51]},"score":0,"packageInfo":{"values":["aeson-helpers"],"tag":"Package"},"name":"decodeNull","moduleName":"Aeson.Decode.Decoders","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Decode","Error"],"JsonDecodeError"]}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]
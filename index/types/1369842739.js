// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1369842739"] = [{"values":[{"sourceSpan":{"start":[324,1],"name":"src/Internal/QueryM.purs","end":[335,4]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"QueryConfig","moduleName":"Ctl.Internal.QueryM","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["ctlServerConfig",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM","ServerConfig"],"ServerConfig"]}]},{"tag":"RCons","contents":["ogmiosConfig",{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM","ServerConfig"],"ServerConfig"]},{"tag":"RCons","contents":["datumCacheConfig",{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM","ServerConfig"],"ServerConfig"]},{"tag":"RCons","contents":["kupoConfig",{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM","ServerConfig"],"ServerConfig"]},{"tag":"RCons","contents":["networkId",{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Address"],"NetworkId"]},{"tag":"RCons","contents":["logLevel",{"tag":"TypeConstructor","contents":[["Data","Log","Level"],"LogLevel"]},{"tag":"RCons","contents":["walletSpec",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Wallet","Spec"],"WalletSpec"]}]},{"tag":"RCons","contents":["customLogger",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Log","Level"],"LogLevel"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Log","Message"],"Message"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}]},{"tag":"RCons","contents":["suppressLogs",{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]},{"tag":"RCons","contents":["hooks",{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM"],"Hooks"]},{"tag":"REmpty","contents":{}}]}]}]}]}]}]}]}]}]}]}]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"`QueryConfig` contains a complete specification on how to initialize a\n`QueryM` environment.\nIt includes:\n- server parameters for all the services\n- network ID\n- logging level\n- wallet setup instructions\n- optional custom logger\n"}],"tag":"SearchResult"}]
-- | An example of fetching datums from `ogmios-datum-cache`. Helpful to test
-- | out the datum-cache integration
-- |
-- | To run this example:
-- |
-- |   * launch all required services with `nix run .#ctl-runtime`
-- |   * let the node and Ogmios sync
-- |   * start the block-fetcher for `ogmios-datum-cache`, e.g.
-- |     ```
-- |     curl localhost:9999/control/fetch_blocks -X POST -d \
-- |       '{ "slot": 54066900 \
-- |        , "id": "6eb2542a85f375d5fd6cbc1c768707b0e9fe8be85b7b1dd42a85017a70d2623d" \
-- |        }' \
-- |        -H 'Content-Type: application/json'
-- |     ```
-- |   * change the `ps-entrypoint` variable in the Makefile to `Examples.Datums`
-- |   * `make run-dev` and visit `localhost:4008` in your browser
module Examples.Datums (main) where

import Contract.Prelude

import Contract.Monad (runContract_, launchAff_, logInfo', traceContractConfig)
import Contract.PlutusData (DatumHash, getDatumByHash, getDatumsByHashes)
import Contract.Prim.ByteArray (hexToByteArrayUnsafe)
import Data.Newtype (wrap)

main :: Effect Unit
main = launchAff_ $ do
  cfg <- traceContractConfig
  runContract_ cfg $ do
    logInfo' "Running Examples.Datums"
    logInfo' <<< show =<< getDatumByHash
      ( mkDatumHash
          "42be572a6d9a8a2ec0df04f14b0d4fcbe4a7517d74975dfff914514f12316252"
      )
    logInfo' <<< show =<< getDatumsByHashes
      [ mkDatumHash
          "777093fe6dfffdb3bd2033ad71745f5e2319589e36be4bc9c8cca65ac2bfeb8f"
      , mkDatumHash
          "e8cb7d18e81b0be160c114c563c020dcc7bf148a1994b73912db3ea1318d488b"
      ]
  where
  mkDatumHash :: String -> DatumHash
  mkDatumHash = wrap <<< hexToByteArrayUnsafe
/**
 * @file fix-annoying-object-keys.ts
 * @description This file contains utility types to transform object keys by removing specific prefixes.
 * 
 * The `RemoveMapsFromObj` type iterates over the keys of an object and applies the `RemoveMaps` type to each key.
 * The `RemoveMaps` type conditionally removes the 'maps:' prefix from keys, resulting in a cleaner and more readable object shape.
 */

interface ApiData {
  'maps:longitude': string
  'maps:latitude': string
  address: string
}

type RemoveMapsFromObj<T> = {
  [K in keyof T as RemoveMaps<K>]: T[K]
}

type RemoveMaps<T> = T extends `maps:${infer U}` ? U : T

type DesiredShape = RemoveMapsFromObj<ApiData> // ~> { longitude: string; latitude: string; address: string; }

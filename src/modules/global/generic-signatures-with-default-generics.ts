/**
 * @file generic-signatures-with-default-generics.ts
 * @description This file demonstrates the use of default generics in TypeScript to create a utility type.
 * 
 * The `ValuesOfKeysStartingWithA` type extracts the values of keys in an object that start with the letter 'a'.
 * This approach leverages TypeScript's template literal types and generics to provide a flexible and type-safe way
 * to work with specific subsets of object properties.
 */

type Obj = {
  a: 'FOO',
  a2: 'a2',
  a3: 'a3',
  b: 'b',
  b1: 'b1',
  b2: 'b2',
}

type ValuesOfKeysStartingWithA<
  Obj,
  _ExtractedKeys extends keyof Obj = Extract<keyof Obj, `a${string}`>
> = {
  [K in _ExtractedKeys]: Obj[K]
}[_ExtractedKeys]

type NewUnion = ValuesOfKeysStartingWithA<Obj>

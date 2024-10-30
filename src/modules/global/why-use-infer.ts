/**
 * @file why-use-infer.ts
 * @description This file demonstrates the use of the `infer` keyword in TypeScript to extract return types from functions.
 * 
 * The `infer` keyword allows for the extraction of types within conditional types, providing a flexible and type-safe way
 * to work with function return types. This approach is useful for creating utility types that can infer and manipulate
 * the return types of functions.
 */

function func(check: boolean) {
  return '1234'
}

const whatever = {}

type FuncResult = ReturnType<typeof func> // ~> type string

type Result = typeof func extends ( // ~> type string
  ...args: any
) => infer R
  ? R
  : never

type WhateverResult = typeof whatever extends ( // ~> type never ({})
  ...args: any
) => infer R
  ? R
  : never

type FakeReturnType<T> = T extends (
  ...args: any
) => infer R
  ? R
  : never

type FuncResult2 = FakeReturnType<typeof func> // ~> type string
type WhateverResult2 = FakeReturnType<typeof whatever> // ~> type never

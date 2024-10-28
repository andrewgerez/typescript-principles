/**
 * @file constrained-generics-with-extends.ts
 * @description This file demonstrates the use of constrained generics with the `extends` keyword in TypeScript.
 * 
 * Use `extends` to restrict a generic type to a specific type or subset of types.
 * This approach ensures that the generic type adheres to the constraints, providing type safety and reducing errors.
 */

function getDeepValue<Obj, FirstKey extends keyof Obj, SecondKey extends keyof Obj[FirstKey]>(
  obj: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey
): Obj[FirstKey][SecondKey] {
  return {} as any
}

const obj = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: "cool",
    d: 2,
  }
}

const result = getDeepValue(obj, "foo", "a")

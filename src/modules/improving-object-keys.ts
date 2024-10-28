/**
 * @file improving-object-keys.ts
 * @description A utility function to get the keys of an object with TypeScript type safety.
 * 
 * This file demonstrates how to create a type-safe utility function to retrieve the keys of an object.
 * TypeScript generics are used to ensure that the keys are correctly typed, enhancing code reliability and maintainability.
 */

const myObject = {
  a: 1,
  b: 2,
  c: 3,
}

function objectKeys<Obj extends object>(obj: Obj): (keyof Obj)[] {
  return Object.keys(obj) as (keyof Obj)[]
}

objectKeys(myObject).forEach((key) => {
  console.log(myObject[key])
})

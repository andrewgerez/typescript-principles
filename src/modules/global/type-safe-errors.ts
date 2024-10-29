/**
 * @file type-safe-errors.ts
 * @description This file contains a utility function `deepEqualCompare` that checks for deep equality between two arguments.
 * 
 * The `deepEqualCompare` function uses TypeScript generics and conditional types to ensure that arrays are not compared.
 * If an array is passed as an argument, a custom error message is thrown. This approach enhances type safety and prevents
 * unintended comparisons.
 */

type CheckForBadArgs<Arg> = Arg extends any[]
  ? 'You cannot compare two arrays using deepEqualCompare'
  : Arg

function deepEqualCompare<Arg>(a: CheckForBadArgs<Arg>, b: CheckForBadArgs<Arg>): boolean {
  if (Array.isArray(a) || Array.isArray(b)) {
    throw new Error('You cannot compare two arrays using deepEqualCompare')
  }

  return a === b
}

deepEqualCompare(1, 1)
deepEqualCompare([], [])

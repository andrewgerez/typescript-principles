/**
 * @file literal-types.ts
 * @description This file demonstrates the use of literal types and the `as const` assertion in TypeScript.
 * 
 * The `as const` assertion ensures that the values are treated as literal types, making them immutable.
 * This approach enhances type safety by preventing reassignment of the values, ensuring that they remain constant.
 */

const tsPeople = [
  'John',
  'Doe',
] as const

tsPeople[0] = 'Eddy' // It wouldn't be possible because we declare AS CONST

const moreTsPeople = {
  John: 'John',
  Doe: 'Doe',
} as const

moreTsPeople.John = 'Whatever' // It wouldn't be possible because we declare AS CONST

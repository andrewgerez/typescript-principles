/**
 * @file create-infer-keys.ts
 * @description This file demonstrates how to create inferred typings from an array of strings and assign values to them.
 * 
 * The `createStatusObject` function generates an object that can check the existence of specified keys within a type.
 * This approach leverages TypeScript generics to ensure type safety and flexibility, allowing the function to handle various object structures.
 */

const data: any = {}

type StatusKey<T extends string> = `is${Capitalize<T>}`
type ParameterStatusType<T extends string> = Record<StatusKey<T>, boolean>

function createStatusObject<T extends string>(
  type: string,
  keys: T[]
): ParameterStatusType<T> {
  return keys.reduce((acc, key) => {
    const visibilityKey = `is${key.charAt(0).toUpperCase() + key.slice(1)}` as StatusKey<T>
    acc[visibilityKey] = data?.[type]?.includes(key)
    return acc
  }, {} as ParameterStatusType<T>)
}

const parametersToCheck = [
  'positiveValue',
  'negativeValue',
  'undefinedValue',
] as const

const statusCheck = createStatusObject('values', [...parametersToCheck])
const { isPositiveValue, isNegativeValue, isUndefinedValue } = statusCheck

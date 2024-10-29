/**
 * @file overloads-vs-generics.ts
 * @description This file demonstrates the difference between function overloads and generics in TypeScript.
 * 
 * Function overloads allow you to define multiple signatures for a function, enabling different return types based on the input type.
 * Generics provide a way to create flexible and reusable functions that can handle various types while preserving type information.
 */

function returnWhatIPassIn(input: number): number
function returnWhatIPassIn(input: string): string
function returnWhatIPassIn(input: unknown): unknown {
  return input
}

const overloadResultNumber = returnWhatIPassIn(1) // ~> type number
const overloadResultString = returnWhatIPassIn('a') // ~> type string

function returnWhatIPassInGeneric<T>(input: T): T {
  return input
}

const genericResultNumber = returnWhatIPassInGeneric(1) // ~> type 1
const genericResultString = returnWhatIPassInGeneric('a') // ~> type 'a'
const genericResultObj = returnWhatIPassInGeneric({ test: 'test' }) // ~> type { test: string }

/**
 * @file function-overloads-with-compose.ts
 * @description This file demonstrates function overloads with a compose utility function.
 * 
 * The compose function enables multiple function signatures with varying argument types,
 * improving type safety and flexibility. It allows for the composition of multiple functions
 * where the output of one function becomes the input of the next.
 */

function compose<Input, FirstArg>(
  func: (input: Input) => FirstArg
): (input: Input) => FirstArg

function compose<Input, FirstArg, SecondArg>(
  func: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg
): (input: Input) => SecondArg

function compose<Input, FirstArg, SecondArg, ThirdArg>(
  func: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg,
  func3: (input: SecondArg) => ThirdArg
): (input: Input) => ThirdArg

function compose(...args: any[]) {
  return {} as any
}

function addOne(a: number) {
  return a + 1
}

function numToString(a: number) {
  return a.toString()
}

function stringToNum(a: string) {
  return parseInt(a)
}

const addOneToString = compose(addOne, numToString, stringToNum)

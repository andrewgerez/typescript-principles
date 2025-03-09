/**
 * @file try-catch.ts
 * @description This file contains a utility function `tryCatch` that wraps a promise in a try-catch block and returns a result object.
 * 
 * The `tryCatch` function takes a promise as an argument and returns a `Result` object, which can be either a `Success` object containing the resolved data or a `Failure` object containing the error.
 * 
 * @template T The type of the data returned by the promise
 * @template E The type of the error (defaults to `Error`)
 */
type Success<T> = { data: T, error: null }
type Failure<E> = { data: null, error: E }
type Result<T, E = Error> = Success<T> | Failure<E>

/**
 * Wraps a promise in a try-catch block and returns a result object.
 * 
 * @param promise The promise to wrap
 * @returns A `Result` object containing either the resolved data or the error
 */
export async function tryCatch<T, E = Error>(
  promise: Promise<T>
): Promise<Result<T, E>> {
  try {
    const data = await promise
    return { data, error: null }
  } catch (error) {
    return { data: null, error: error as E }
  }
}

export async function getData() {
  const response = await tryCatch(
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  )

  if (response.error) {
    console.error(response.error)
    return []
  }

  const data = await response.data.json()

  return data
}

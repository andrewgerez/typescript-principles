/**
 * @file dynamic-args-with-generics.ts
 * @description This file demonstrates how to use generics to handle dynamic function arguments.
 * 
 * Use this pattern when you want to pass a generic type as an argument to a function.
 * It's especially useful when you have a function that accepts multiple types of arguments.
 * This approach ensures type safety and flexibility, allowing the function to handle different argument structures.
 */

type EventArgs =
  | {
    type: 'LOG_IN'
    payload: {
      userId: string
    }
  }
  | {
    type: 'SIGN_OUT'
  }

function sendEvent<T extends EventArgs['type']>(
  ...args: Extract<EventArgs, { type: T }> extends { payload: infer TPayload }
    ? [type: T, payload: TPayload]
    : [type: T]
) { }

sendEvent('LOG_IN', { userId: '1' })
sendEvent('SIGN_OUT')

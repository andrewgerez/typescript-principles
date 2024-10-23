/**
 * Dynamic function args with generics
 * 
 * Use this pattern when you want to pass a generic type as an argument to a function.
 * It's especially useful when you have a function that accepts multiple types of arguments.
 * 
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

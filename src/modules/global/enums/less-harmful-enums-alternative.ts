/**
 * @file less-harmful-enums-alternative.ts
 * @description This file demonstrates how to create a type-safe enumeration using TypeScript's `as const` assertion.
 * 
 * The `AuthMethod` object defines a set of auth methods, and the `AuthMethod` type extracts the values of these auth methods.
 * This approach provides a type-safe way to work with enumerations, ensuring that only valid auth methods can be used.
 */

const authMethods = ['push', 'sms', 'voice'] as const

type AuthMethod = typeof authMethods[number]

const AuthMethod: { [k in AuthMethod]: string } = {
  push: 'push',
  sms: 'sms',
  voice: 'voice',
}

function doThing(authMethod: AuthMethod) {
  console.log(AuthMethod[authMethod])
}

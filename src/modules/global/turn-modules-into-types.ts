/**
 * @file turn-modules-into-types.ts
 * @description This file demonstrates how to convert a module into a type using TypeScript.
 * 
 * The `ActionModule` type represents the type of the imported module, while the `Action` type extracts the values of the module's keys.
 * This approach allows for type-safe access to the module's properties and values, enhancing code reliability and maintainability.
 */

export type ActionModule = typeof import('./constants')

export type Action = ActionModule[keyof ActionModule]

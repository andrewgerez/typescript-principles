/**
 * @file less-harmful-enums.ts
 * @description This file demonstrates how to create a type-safe enumeration using TypeScript's `as const` assertion.
 * 
 * The `LOG_LEVEL` object defines a set of log levels, and the `LogLevel` type extracts the values of these log levels.
 * This approach provides a type-safe way to work with enumerations, ensuring that only valid log levels can be used.
 */

const LOG_LEVEL = {
  DEBUG: 'DEBUG',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
} as const

type ObjectValues<T> = T[keyof T]

type LogLevel = ObjectValues<typeof LOG_LEVEL>

function log(message: string, level: LogLevel) { }

log('Hey', LOG_LEVEL.DEBUG)
log('Hey', 'DEBUG')

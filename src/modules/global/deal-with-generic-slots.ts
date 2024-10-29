/**
 * @file deal-with-generic-slots.ts
 * @description This file demonstrates how to create a utility function that removes specified keys from an object using generics.
 * 
 * The `makeKeyRemover` function generates a key remover function that can exclude specified keys from an object.
 * This approach leverages TypeScript generics to ensure type safety and flexibility, allowing the function to handle various object structures.
 */

const makeKeyRemover =
  <Key extends string>(keys: Key[]) =>
    <Obj extends object>(obj: Obj): Omit<Obj, Key> => {
      return {} as any
    }

const keyRemover = makeKeyRemover(['a', 'b'])

const newObject = keyRemover({ a: 1, b: 2, c: 3 })

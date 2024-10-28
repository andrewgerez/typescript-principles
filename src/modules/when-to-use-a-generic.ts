/**
 * @file when-to-use-a-generic.ts
 * @description This file provides examples and guidelines on when to use generics in TypeScript.
 * 
 * Use generics when:
 * 
 *   - You're not sure what type you'll receive.
 *   - You're dealing with a large number of similar types.
 *   - You're working with a variety of different types.
 *   - You have multiple properties with different types.
 * 
 * Generics allow you to write flexible and reusable code that can handle different types of data.
 * They provide type safety and help prevent errors related to type mismatches or unexpected data.
 */

interface Animal {
  name: string
}

interface Human {
  firstName: string
  lastName: string
}

type DisplayName<T extends Animal | Human> = T extends Animal ? { animalName: string } : { humanName: string }

function getDisplayName<T extends Animal | Human>(
  item: T
): DisplayName<T> {
  if ('name' in item) {
    return { animalName: item.name } as DisplayName<T>
  }

  return { humanName: `${item.firstName} ${item.lastName}` } as DisplayName<T>
}

const result1 = getDisplayName({ name: 'Lion' })
const result2 = getDisplayName({ firstName: 'John', lastName: 'Doe' })

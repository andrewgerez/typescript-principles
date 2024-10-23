/**
 * When to use a generic
 * 
 *   - when you don't know what type you will get
 *   - when you have a lot of similar types
 *   - when you have a lot of different types
 *   - when you have a lot of different properties
 * 
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

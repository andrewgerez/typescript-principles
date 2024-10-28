/**
 * Improving Object Keys
 * 
 * A utility function to get the keys of an object with TypeScript type safety. 
 */

const myObject = {
  a: 1,
  b: 2,
  c: 3,
}

function objectKeys<Obj extends object>(obj: Obj): (keyof Obj)[] {
  return Object.keys(obj) as (keyof Obj)[]
}

objectKeys(myObject).forEach((key) => {
  console.log(myObject[key])
})

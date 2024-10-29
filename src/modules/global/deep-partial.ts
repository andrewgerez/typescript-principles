/**
 * @file deep-partial.ts
 * @description This file defines a `DeepPartial` type that recursively makes all properties of a type optional.
 * 
 * The `DeepPartial` type is useful when you need to create a type that represents a partial version of another type,
 * where all properties and nested properties are optional. This approach enhances flexibility and type safety,
 * allowing for more granular control over object structures.
 */

export type DeepPartial<T> = T extends Function
  ? T
  : T extends Array<infer InferredArrayMember>
  ? DeepPartialArray<InferredArrayMember>
  : T extends object
  ? DeepPartialObject<T>
  : T | undefined

interface DeepPartialArray<T> extends Array<DeepPartial<T>> { }

type DeepPartialObject<T> = {
  [Key in keyof T]?: DeepPartial<T[Key]>
}

interface Post {
  id: string
  comments: { value: string }[]
  meta: {
    name: string
    description: string
  }
}

const post: DeepPartial<Post> = {
  comments: [{ value: 'comment' }],
  meta: {
    name: 'name',
  },
}

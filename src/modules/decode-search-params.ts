/**
 * @file decode-search-params.ts
 * @description This file demonstrates how to decode search parameters from a query string into a TypeScript object.
 * 
 * Use this pattern when you need to decode a query string into a strongly-typed TypeScript object.
 * This approach leverages TypeScript's type manipulation capabilities to ensure type safety and accuracy.
 */

import { String, Union } from 'ts-toolbelt'

const query = `/home?a=great&b=nice`

type Query = typeof query

type SecondQueryPart = String.Split<Query, "?">[1]

type QueryElements = String.Split<SecondQueryPart, "&">

type QueryParams = {
  [QueryElement in QueryElements[number]]: {
    [Key in String.Split<QueryElement, "=">[0]]: String.Split<
      QueryElement,
      "="
    >[1]
  }
}[QueryElements[number]]

const obj: Union.Merge<QueryParams> = {
  a: 'great',
  b: 'nice'
}

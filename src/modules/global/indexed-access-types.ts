/**
 * @file indexed-access-types.ts
 * @description This file demonstrates the use of indexed access types in TypeScript.
 * 
 * Indexed access types allow you to retrieve the type of a property or element within another type.
 * This approach enhances type safety and flexibility by enabling precise type extraction from complex structures.
 */

interface ColorsVariants {
  primary: 'blue'
  secondary: 'red'
  tertiary: 'green'
}

type PrimaryColor = ColorsVariants['primary'] // ~> 'blue'
type NonPrimaryColor = ColorsVariants['secondary' | 'tertiary'] // ~> 'red' | 'green'
type EveryColor = ColorsVariants[keyof ColorsVariants] // ~> 'blue' | 'red' | 'green'

type Letters = ['a', 'b', 'c']

type AOrB = Letters[0 | 1] // ~> 'a' | 'b'
type Letter = Letters[number] // ~> 'a' | 'b' | 'c'

interface UserRoleConfig {
  user: ['view', 'create', 'update']
  superAdmin: ['view', 'create', 'update', 'delete']
}

type Role = UserRoleConfig[keyof UserRoleConfig][number] // ~> 'view' | 'create' | 'update' | 'delete'

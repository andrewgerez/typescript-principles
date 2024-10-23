/**
 * Omit props
 * 
 * Use this function when you want to exclude specific properties from an object.
 * It's especially useful in situations where:
 * 
 *   - You have an object with many properties and want to remove some of them.
 *   - You have properties with similar names and want to avoid typos.
 *   - You need to handle objects with different structures and want to normalize the properties.
 */

import React from 'react'

type IconSize = LooseAutocomplete<'sm' | 'xs'>

type LooseAutocomplete<T extends string> = T | Omit<string, T>

interface IconProps {
  size: IconSize
}

function Icon(props: Readonly<IconProps>) {
  console.log(props.size)
  return <></>
}

function Component() {
  return (
    <>
      <Icon size='sm' />
      <Icon size='something' />
    </>
  )
}

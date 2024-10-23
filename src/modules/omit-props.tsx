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

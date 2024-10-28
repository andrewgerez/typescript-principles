/**
 * @file conditional-react-props-extract.tsx
 * @description A utility type for extracting the props of a React component based on a condition.
 * 
 * This file demonstrates how to create a utility type that extracts the props of a React component conditionally.
 * It supports both functional and class components, ensuring type safety and flexibility.
 */

import React from 'react'

function MyComponent(props: { enabled: boolean }) {
  return null
}

class MyOtherComponent extends React.Component<{
  enabled: boolean
}> { }

type PropsFrom<T> = T extends React.FC<infer Props>
  ? Props
  : T extends React.Component<infer Props>
  ? Props
  : never

const props: PropsFrom<typeof MyComponent> = {
  enabled: true
}

const props2: PropsFrom<MyOtherComponent> = {
  enabled: true
}

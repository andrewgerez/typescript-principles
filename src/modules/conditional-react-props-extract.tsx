/**
 * Conditional React Props Extract
 * 
 * A utility type for extracting the props of a React component base on a condition.
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

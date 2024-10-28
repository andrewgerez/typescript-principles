/**
 * @file react-components-with-generics.tsx
 * @description This file demonstrates the use of generics to define a generic type for a React component.
 * 
 * Generics allow for the creation of reusable and flexible components by enabling type-safe props.
 * 
 * This approach enhances code maintainability and reduces the likelihood of runtime errors.
 */

interface TableProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

function Table<T>(props: TableProps<T>) {
  return null
}

function Component() {
  return (
    <Table<{ id: number, name: string }>
      items={[
        {
          id: 1,
          name: 'John'
        },
      ]}
      renderItem={(item) => <div>{item.id}</div>}
    ></Table>
  )
}

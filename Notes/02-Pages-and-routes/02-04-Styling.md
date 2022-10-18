[← Go back to README.md](/README.md#my-notes)

# Creating a styled component based on another component

1. Create a component to use as base

- Base Input component

```ts
const BaseInput = styled.input`
  background: transparent;
`;
```

2. Create a component and pass styled as a function

- Another input based on `BaseInput`

```ts
export const TaskInput = styled(BaseInput)`
  flex: 1;
`;
```

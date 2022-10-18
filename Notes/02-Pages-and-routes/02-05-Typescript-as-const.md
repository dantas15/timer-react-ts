[← Go back to README.md](/README.md#my-notes)

# Creating the `Status` component

- We need to map the `statusColor` prop to a color
- If we just create an object like this:

```ts
const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
};
```

Typescript will understand that STATUS_COLORS' values will be any string, hence, the color might not be found when we try to access `${(props) => props.theme[STATUS_COLORS[props.statusColor]]}`.

- In order to fix it, we have to make `STATUS_COLORS`' values readonly, so we let Typescript know that the values won't be different:

```ts
const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const;
```

- Now,

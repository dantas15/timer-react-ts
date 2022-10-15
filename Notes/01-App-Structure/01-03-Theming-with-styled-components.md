[← Go back to README.md](/README.md#my-notes)

# Default theme

In `src/styles/themes/default.ts`

```ts
export const defaultTheme = {
  colors: {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green',
  },
};
```

## Theme provider

- In order to use the theme we have to wrap our app with `ThemeProvider`.
- `ThemeProvider` requires a prop named theme, so we can use different themes.

In `src/App.tsx`

```tsx
import { ThemeProvider } from 'styled-components';

import { Button } from './components/Button';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button>Test</Button>
    </ThemeProvider>
  );
}
```

## Use themes on the components

As we've seen how to [pass props to styled components](./01-02-Setup-styled-components.md#Pass-props-to-styled-component), we can call `props.theme` inside styled-components's template literals.

```ts
export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background-image: ${(props) => props.theme.colors.primary};
`;
```

It works, but there isn't any typescript support automatically. that's what we'll be doing [next](./01-04-Add-typescript-support-themes.md)

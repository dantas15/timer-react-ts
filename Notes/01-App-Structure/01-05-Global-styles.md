[← Go back to README.md](/README.md#my-notes)

1. Create new file `src/styles/global.ts`

```ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;

  }

  body {
    background: #333;
    color: #fff;

  }  
`;
```

2. Reference GlobalStyles inside `ThemeProvider`

```tsx
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button>Test</Button>

      <GlobalStyles />
    </ThemeProvider>
  );
}
```

[← Go back to README.md](/README.md#my-notes)

# Adding dependency

- [React Router Dom Github](https://github.com/remix-run/react-router#readme)

```
yarn add react-router-dom
```

# Create pages

- `src/pages/Home.tsx`
- `src/pages/History.tsx`

Put some function component in both just so you don`t get any errors

# Creating the Router as a component

1. Create `src/Router.tsx`

```tsx
import { Routes, Route } from 'react-router-dom';

import { History } from './pages/History';
import { Home } from './pages/Home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}
```

2. Wrap the `App` with `<BrowserRouter/>`
3. Put the `Router` component you just created inside `BrowserRouter`

```tsx
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { Router } from './Router';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}
```

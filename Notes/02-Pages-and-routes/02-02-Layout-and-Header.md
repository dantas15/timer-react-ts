[← Go back to README.md](/README.md#my-notes)

# Creating a component to all pages

- `src/components/Header.tsx`

```tsx
export function Header() {
  return <h1>Header</h1>;
}
```

- We'll be using this component in all pages
- Instead of importing it on all pages, we can create a layout and use `react-router-dom`'s `<Outlet />` component
  - This is way more performative and easier to use, specially when we have a lot of different pages

## Create a layout

In `src/layouts/DefaultLayout`

```tsx
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
```

- What's [`<Outlet />`](https://reactrouter.com/en/main/components/outlet) for?
  - "An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route."

## Render `DefaultLayout` for `Home` and `History`

- Create another route and put the `<DefaultLayout />` as the element
  - You should put the children that you want the `<Header />` to be rendered

```tsx
import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';

import { History } from './pages/History';
import { Home } from './pages/Home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
```

- Now you can have multiple layouts, for example, if you have an admin panel that renders only when you access the pathname `/admin`:

```tsx
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/users" element={<Users />} /> {/* /admin/users */}
        <Route path="/profiles" element={<Profiles />} /> {/* /admin/profiles */}
      </Route>
    </Routes>
  );
}
```

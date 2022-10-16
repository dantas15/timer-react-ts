[← Go back to README.md](/README.md#my-notes)

# Create a file for types definition

- [styled-components docs](https://styled-components.com/docs/api#create-a-declarations-file)

1. Create a folder `src/@types`

2. Create a typescript definition file `styled.d.ts`

3. Extend the defaultTheme you created for this project and (re)declare the `DefaultTheme` interface, but this time, extending your `ThemeType`

```ts
import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
```

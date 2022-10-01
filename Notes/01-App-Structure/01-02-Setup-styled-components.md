[← Go back to README.md](/README.md#my-notes)

# Install styled-components

> [Styled-Components docs]()

```
yarn add styled-components
```

## Add types support

```
yarn add -D @types/styled-components
```

# How to create a styled component

In `components/Button.styles.ts`

```ts
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100px;
  height: 40px;
`;
```

- Use the button styles as a React Component.
  In `components/Button.tsx`

```tsx
import { ButtonContainer } from './Button.styles';

export function Button() {
  return (
    <>
      <ButtonContainer>Test</ButtonContainer>
    </>
  );
}
```

## Pass props to styled component

- Create an interface and pass to the `ButtonContainer` component

```ts
export type ButtonColorVariants =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success';

interface ButtonContainerProps {
  variant: ButtonColorVariants;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
`;
```

- Import the types to pass the variant as a prop to the `Button` component

```tsx
import { ButtonContainer, ButtonColorVariants } from './Button.styles';

interface ButtonProps {
  variant?: ButtonColorVariants;
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>test</ButtonContainer>;
}
```

## Change the background color passing props and with object literals

```ts
// Create a object with the keys matching the variants
const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  ${(props) => {
    // Each function in this template literal
    // receives the prop that extends the default props
    // and the ones you passed as generics
    return `background-color: ${buttonVariants[props.variant]}`;
  }}
`;
```

- You can also change `background-color` return value to `css` in order to use styled-components' css intellisense

```ts
${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `;
  }}
```

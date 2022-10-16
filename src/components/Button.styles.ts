import styled, { css } from 'styled-components';

export type ButtonColorVariants =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success';

interface ButtonContainerProps {
  variant: ButtonColorVariants;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background-image: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors};
`;

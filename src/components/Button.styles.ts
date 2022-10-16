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
  border-radius: 4px;
  border: 0;
  margin: 8px;

  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-300']};
`;

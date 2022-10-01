import { ReactNode } from 'react';
import { ButtonContainer, ButtonColorVariants } from './Button.styles';

interface ButtonProps {
  variant?: ButtonColorVariants;
  children: ReactNode;
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>;
}

import * as React from 'react';
import { NormalButton, BorderedButton, ButtonWrapper } from './button.styles';

interface ButtonProps {
  as?: React.ElementType<any>;
  color?: string;
  margin?: string;
  variant?: 'normal' | 'bordered' | 'colored';
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, variant = 'colored', ...restProps } = props;

  if (variant === 'colored') {
    return (
      <NormalButton size='lg' {...restProps}>
        {children}
      </NormalButton>
    );
  }

  if (variant === 'bordered') {
    return (
      <BorderedButton size='lg' {...restProps}>
        {children}
      </BorderedButton>
    );
  }

  return (
    <ButtonWrapper size='lg' {...restProps}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;

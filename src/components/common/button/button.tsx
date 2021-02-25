import * as React from 'react';
import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { NormalButton, BorderedButton, ButtonWrapper } from './button.styles';

interface ButtonProps extends ChakraButtonProps {
  as?: React.ElementType<any>;
  color?: string;
  variant?: 'normal' | 'bordered' | 'colored';
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, variant, ...restProps } = props;

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

Button.defaultProps = {
  variant: `colored`,
};

export default Button;

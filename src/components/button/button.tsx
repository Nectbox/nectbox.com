import * as React from 'react';
import { ButtonWrapper } from './button.styles';

const Button: React.FC = (props) => {
  const { children, ...restProps } = props;

  return (
    <ButtonWrapper size='lg' {...restProps}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;

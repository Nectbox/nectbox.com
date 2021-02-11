import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { Button } from '@chakra-ui/react';

export const ButtonWrapper = styled(Button)`
  background: transparent;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 2.15rem 2rem;
  border-radius: 10px;
  width: fit-content;
  ${(props) => props.margin && `margin: ${props.margin}`};

  :hover {
    background: transparent;
    transform: scale(1.035);
  }
`;

export const NormalButton = styled(ButtonWrapper)`
  background: ${(props) =>
    props.color ? props.color : theme.colors.background.dark};
  color: ${theme.colors.background.light};
  box-shadow: 0 0 30px 0 #da365461;

  :hover {
    background: ${(props) =>
      props.color ? props.color : theme.colors.background.dark};
    box-shadow: 0 0 30px 0 #da3654a6;
  }
`;

export const BorderedButton = styled(ButtonWrapper)`
  border: 0.2rem solid
    ${(props) => (props.color ? props.color : theme.colors.background.dark)};
`;

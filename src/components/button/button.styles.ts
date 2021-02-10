import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';

export const ButtonWrapper = styled(Button)`
  font-size: 1.6rem;
  font-weight: 700;
  background: #1a202c;
  color: #edf2f7;
  padding: 2.15rem 2rem;
  border-radius: 10px;
  box-shadow: 0 0 30px 0 #da365461;

  :hover {
    background: #1a202c;
    box-shadow: 0 0 30px 0 #da3654a6;
    transform: scale(1.035);
  }

  /* background: hsla(329, 73%, 47%, 1);

  background: linear-gradient(
    90deg,
    hsla(329, 73%, 47%, 1) 0%,
    hsla(0, 96%, 67%, 1) 100%
  ); */
`;

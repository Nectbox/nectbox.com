import * as React from 'react';
import styled from '@emotion/styled';
import {
  Alert as ChakraAlert,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { colors } from '../../../styles/theme';

const AlertWrapper = styled(ChakraAlert)`
  display: flex;
  padding: 2rem;
  border-radius: 0.8rem;
  background: ${colors.background.dark};
  color: ${colors.text.light};
  margin: 2rem;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
`;

export const Title = styled(AlertTitle)`
  font-size: 2.15rem;
  margin-bottom: 1.75rem;
`;

export const Body = styled(AlertDescription)`
  display: block;
  font-size: 1.7rem;
  line-height: 2.3rem;
`;

interface AlertProps {
  title: string;
  message: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { title, message, onClose, ...rest } = props;

  return (
    <AlertWrapper status='success' {...rest}>
      <CheckCircleIcon w={14} h={14} />
      <Box flex='1' pl='2rem' pr='0.5rem'>
        <Title>{title}</Title>
        <Body>{message}</Body>
      </Box>
      <CloseButton
        onClick={onClose}
        position='absolute'
        right='2px'
        top='2px'
      />
    </AlertWrapper>
  );
};

export default Alert;

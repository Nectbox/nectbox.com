import { colors } from '../../../styles/theme';
import styled from '@emotion/styled';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as CInput,
  NumberInputField,
  Textarea,
} from '@chakra-ui/react';
import { Form as FormikForm } from 'formik';

const baseInput = `
  font-size: 1.6rem;
  padding: 2rem 1.2rem;
  border-color: ${colors.background.gray};

  :focus {
    border-color: ${colors.background.darkGray};
    box-shadow: 0 0 0 1px ${colors.background.darkGray};
  }

  [aria-invalid='true'] {
    border-color: ${colors.accent.red};
    box-shadow: 0 0 0 1px ${colors.accent.red};
  }
`;

export const Form = styled(FormikForm)`
  width: 100%;
  max-width: 70rem;
`;

export const FormGroup = styled(FormControl)`
  margin-bottom: 1.5rem;

  :last-of-type {
    margin-bottom: 0;
  }
`;

export const Label = styled(FormLabel)`
  font-size: 1.6rem;
  font-weight: 400;
`;

export const Input = styled(CInput)`
  ${baseInput}
`;

export const NumberField = styled(NumberInputField)`
  ${baseInput}
`;

export const Description = styled(Textarea)`
  ${baseInput};

  padding: 1rem 1.2rem;
`;

export const Error = styled(FormErrorMessage)`
  font-size: 1.35rem;
  padding-left: 0.3rem;
`;

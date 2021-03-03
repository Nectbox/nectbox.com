import * as React from 'react';
import * as Yup from 'yup';
import { Alert, Button } from '../';
import {
  Field,
  Formik,
  FormikHelpers,
  FieldInputProps,
  FormikState,
} from 'formik';
import {
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInput,
  NumberInputStepper,
  Checkbox,
  useToast,
} from '@chakra-ui/react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Description,
  NumberField,
  Error,
} from './contact-form.styles';

interface FormValues {
  name: string;
  email: string;
  company: string;
  budget: number;
  description: string;
  acceptedDataCollection: boolean;
}

interface FieldProps<V extends keyof FormValues> {
  field: FieldInputProps<FormValues[V]>;
  form: FormikState<FormValues>;
}

const ContactFormErrorSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(32, 'Name must be 32 characters or less')
    .required('Required field'),
  email: Yup.string()
    .email('Email must be formatted correctly.')
    .required('Required field'),
  company: Yup.string()
    .min(3, 'Company name must be at least 3 characters')
    .max(54, 'Company name  must be 54 characters or less'),
  budget: Yup.number().min(0, 'You cannot go below "0"'),
  description: Yup.string()
    .min(12, 'Must be at least 12 characters')
    .max(256, 'Must be 256 characters or less')
    .required('Required field'),
  acceptedDataCollection: Yup.boolean().required('Required field'),
});

const Toast: React.FC<any> = (props) => (
  <Alert
    title='Message sent'
    message='Thanks for submitting your application. Our team will get back to you soon.'
    {...props}
  />
);

const ContactForm = () => {
  const toast = useToast();

  const initialFormValues: FormValues = {
    name: '',
    email: '',
    company: '',
    budget: 0,
    description: '',
    acceptedDataCollection: true,
  };

  const encode = (data: Record<string, any>) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={ContactFormErrorSchema}
      onSubmit={async (
        values: FormValues,
        { setSubmitting, resetForm }: FormikHelpers<FormValues>
      ) => {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'Contact Form',
            ...values,
          }),
        }).catch((error) => console.error(error));
        setSubmitting(false);
        resetForm();

        toast({
          position: 'bottom-left',
          isClosable: true,
          duration: 3000,
          render: Toast,
        });
      }}>
      {(props) => (
        <Form
          name='Contact Form'
          method='POST'
          data-netlify='true'
          data-netlify-honeypot='bot-field'>
          <input type='hidden' name='form-name' value='Contact Form' />
          <Field name='name'>
            {({ field, form }: FieldProps<'name'>) => (
              <FormGroup isInvalid={form.errors.name && form.touched.name}>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' {...field} />
                <Error>{form.errors.name}</Error>
              </FormGroup>
            )}
          </Field>
          <Field name='email'>
            {({ field, form }: FieldProps<'email'>) => (
              <FormGroup isInvalid={form.errors.email && form.touched.email}>
                <Label htmlFor='email'>Email address</Label>
                <Input id='email' {...field} />
                <Error>{form.errors.email}</Error>
              </FormGroup>
            )}
          </Field>
          <Field name='company'>
            {({ field, form }: FieldProps<'company'>) => (
              <FormGroup
                isInvalid={form.errors.company && form.touched.company}>
                <Label htmlFor='company'>Company</Label>
                <Input id='company' {...field} />
                <Error>{form.errors.company}</Error>
              </FormGroup>
            )}
          </Field>
          <Field name='budget'>
            {({ field, form }: FieldProps<'budget'>) => (
              <FormGroup isInvalid={form.errors.budget && form.touched.budget}>
                <Label htmlFor='budget'>Budget</Label>
                <NumberInput
                  id='budget'
                  min={0}
                  defaultValue={field.value}
                  allowMouseWheel>
                  <NumberField {...field} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Error>{form.errors.budget}</Error>
              </FormGroup>
            )}
          </Field>
          <Field name='description'>
            {({ field, form }: FieldProps<'description'>) => (
              <FormGroup
                isInvalid={form.errors.description && form.touched.description}>
                <Label htmlFor='description'>
                  Tell us what you are looking for
                </Label>
                <Description id='description' resize='vertical' {...field} />
                <Error>{form.errors.description}</Error>
              </FormGroup>
            )}
          </Field>
          <Field name='acceptedDataCollection'>
            {({ field, form }: FieldProps<'acceptedDataCollection'>) => (
              <FormGroup
                isInvalid={
                  form.errors.acceptedDataCollection &&
                  form.touched.acceptedDataCollection
                }>
                <Checkbox
                  colorScheme='blackAlpha'
                  spacing='1rem'
                  size='lg'
                  id='acceptedDataCollection'
                  defaultChecked={field.value}>
                  I agree that the data I have submited can be used internally
                  in order for me to be contacted at a later time
                </Checkbox>
                <Error>{form.errors.acceptedDataCollection}</Error>
              </FormGroup>
            )}
          </Field>
          <Button mt='4rem' isLoading={props.isSubmitting} type='submit'>
            Submit request
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

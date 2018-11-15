import * as yup from 'yup';

export const email = yup.string().email();

export const number = yup
  .number()
  .min(18)
  .required();

export const alphabet = yup
  .string()
  .matches(/^[a-zA-Z- ]+$/, 'Please enter only alphabets , space, -');

export const phone = yup.string().matches(/09[0-9]{9,9}/, 'phone validation');

export const date = yup.date().required();

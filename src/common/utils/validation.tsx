import * as Yup from 'yup';

export function validateDate(parDate?: Date): boolean {
  if (!parDate) {
    alert('Date is required');
    return false;
  }
  return true;
}

export const ProfileSchema = Yup.object().shape({
  password: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

export const PersonalDataSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  surname: Yup.string().required('Required')
});

export const validate = (touched?: boolean, error?: string): boolean => !!(error && touched);

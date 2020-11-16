import * as yup from 'yup';

const signUpSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .min(6, 'username must be at least 6 characters long')
        .required('username is a required field'),
    email: yup
        .string()
        .trim()
        .required('email is a required field'),
    password: yup
        .string()
        .trim()
        .min(6, 'password must be at least 6 characters long')
        .required('password is a required field'),
});

export default signUpSchema;
import * as yup from 'yup';

const loginSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .min(2, 'username must be at least 2 characters long')
        .required('username is a required field'),
    password: yup
        .string()
        .min(6, 'password must be at least 6 characters long')
        .required('password is a required field'),
});

export default loginSchema;
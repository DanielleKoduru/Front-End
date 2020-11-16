import * as yup from 'yup';

const guestSchema = yup.object().shape({
    guestName: yup
        .string()
        .trim()
        .min(2, 'Name must be at least 2 characters long')
        .required('Name is a required field'),
});

export default guestSchema;
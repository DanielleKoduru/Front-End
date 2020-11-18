import * as yup from 'yup';

const guestSchema = yup.object().shape({
    guestName: yup
        .string()
        .trim()
        .min(2, 'Name must be at least 2 characters long')
        .required('Name is a required field'),
    isGoing: yup
        .string()
        .required('You must select yes or no'),
    numberOfGuests: yup
        .string()
        .required('you must select your guest party size'),
});

export default guestSchema;
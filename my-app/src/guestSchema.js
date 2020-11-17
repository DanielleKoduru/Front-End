import * as yup from 'yup';

const guestSchema = yup.object().shape({
    guestName: yup
        .string()
        .trim()
        .min(2, 'Name must be at least 2 characters long')
        .required('Name is a required field'),
    isGoing: yup.bool().oneOf([true], 'You must select yes or no'),
    numberOfGuests: yup
        .bool()
        .required('you must select your guest party size'),
});

export default guestSchema;
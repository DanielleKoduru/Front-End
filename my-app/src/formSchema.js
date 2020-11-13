import * as yup from 'yup';

const formSchema = yup.object().shape({
    eventName: yup
        .string()
        .trim()
        .min(3, 'Name must be at least 3 characters long')
        .required('Name is a required field'),
    date: yup.string().required('You must choose a date'),
    time: yup.string(),
    location: yup.string(),
    foodList: yup.string(),
    isGoing: yup.string(),
    numberOfGuests: yup.string().required('You must choose a number of guests'),
});

export default formSchema;
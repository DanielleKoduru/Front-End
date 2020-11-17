import * as yup from 'yup';

const formSchema = yup.object().shape({
    eventName: yup
        .string()
        .trim()
        .min(3, 'Name must be at least 3 characters long')
        .required('Name is a required field'),
    date: yup.string().required('You must enter a date'),
    time: yup.string().required('You must enter a time'),
    location: yup.string().required('You must enter a location'),
    foodList: yup.string().required('You must enter a Menu item(s)'),
});

export default formSchema;
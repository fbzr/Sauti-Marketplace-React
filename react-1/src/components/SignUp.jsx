import React from 'react';
import { Form, withFormik, useField } from 'formik';
import * as yup from 'yup';
import { TextField } from '@material-ui/core';

// Material UI TextField with access to Formik Field's props and methods 
const MuiFormikTextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <TextField 
            {...field}
            {...props}
            label={label}
            error={meta.error && meta.touched}
            helperText={ (meta.error && meta.touched) && meta.error }
        />         
    )
}

const SignUpForm = ({ values }) => {
    return (
        <Form autoComplete='off'>
            <MuiFormikTextField label='First Name' name='fname' id='fname' />
            <MuiFormikTextField label='Last Name' name='lname' id='lname' />
            <MuiFormikTextField label='Email' name='email' id='email' type='email' />
            <MuiFormikTextField name='password' id='password' type='password' label='Password' />
            <MuiFormikTextField name='password2' id='password2' type='password' label='Password Confirmation' />
            
            <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
    )
}

const SignUp = withFormik({
    // Initialize "formik states"
    mapPropToValues: () => ({
        fname: '',
        lname: '',
        email: '',
        password: '',
        password2: ''
    }),
    // Create yup validation schema
    validationSchema: yup.object().shape({
        fname: yup.string().min(2, 'First name must have at least 2 characters').required('First name is required'),
        lname: yup.string().min(2, 'First name must have at least 2 characters').required('First name is required'),
        email: yup.string().email().required('Email is required'),
        password: yup.string().min(8, 'Password must have at least 8 characters').required('Password required'),
        password2: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
    })
})(SignUpForm)

export default SignUp

import React from 'react';
import { Form, withFormik, Field } from 'formik';
import * as yup from 'yup';


const SignUpForm = () => {
    return (
        <div>
            Sign Up
        </div>
    )
}

const SignUp = withFormik({
    // Initialize "formik states"
    mapPropToValues: () => ({
        fname: '',
        lname: '',
        email: ''
    }),
    validationSchema: yup.object().shape({
        fname: yup.string().min(2, 'First name needs to have at least 2 characters').required('First name is required'),
        lname: yup.string().min(2, 'First name needs to have at least 2 characters').required('First name is required'),
        email: yup.string().email().required('Email is required')
    })
})(SignUpForm)

export default SignUp

import React from 'react';
import { Form, withFormik, useField } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        width: '100%',
        backgroundColor: '#eee',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    },
    paper: {
        width: '100%',
        padding: theme.spacing(2)
    },
    fieldsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    },
    field: {
        margin: '5px 0'
    }
  }));

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

const SignUpForm = (props) => {
    const { isSubmitting } = props;
    const classes = useStyles();

    return (
        <Grid container className={classes.root} >
            <Grid item lg={3} md={4} sm={6} xs={11} p={4}>
            <Paper elevation={3} spacing={2} className={classes.paper}>
                <Typography variant="h3" component="h1">
                    Sign Up
                </Typography>
                <Form width={500} autoComplete='off' className={classes.fieldsContainer}>
                    <MuiFormikTextField className={classes.field} label='First Name' name='fname' id='fname' />
                    <MuiFormikTextField className={classes.field} label='Last Name' name='lname' id='lname' />
                    <MuiFormikTextField className={classes.field} label='Email' name='email' id='email' type='email' />
                    <MuiFormikTextField className={classes.field} name='password' id='password' type='password' label='Password' />
                    <MuiFormikTextField className={classes.field} name='password2' id='password2' type='password' label='Password Confirmation' />
                    <Button disabled={isSubmitting} type='submit'>Submit</Button>
                </Form>
            </Paper>
            </Grid>
        </Grid>
    )
}

const SignUp = withFormik({
    // Initialize "formik states"
    mapPropsToValues: () => ({
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
        password2: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Password confirmation required')
    }),
    handleSubmit: (data, { resetForm, setSubmitting}) => {
        setSubmitting(true);
        // Post request simulation
        setTimeout(() => {
            console.log(data);
            resetForm();
            setSubmitting(false);
        }, 2000);
    }
})(SignUpForm)

export default SignUp

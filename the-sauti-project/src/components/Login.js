import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import "./login.css";


const styles = () => ({
  card: {
    maxWidth: 420,
    marginTop: 50,
  },
  container: {
    display: "Flex",
    justifyContent: "center",
  },
  actions: {
    float: "right"
  }
});




const Login = props => {
  const {
    classes,
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;

  return (
    <div className={classes.container}>
  
      <form onSubmit={handleSubmit}>
      
        <Card className={classes.card}>
      <h1>Login</h1>

          <CardContent>
            <TextField
              id="username"
              label="username"
              type="text"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.username ? errors.username : ""}
              error={touched.username && Boolean(errors.username)}
              style={{color: "#870000"}}

              margin="dense"
              variant="outlined"
              fullWidth
            />

            <TextField
              id="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.password ? errors.password : ""}
              error={touched.password && Boolean(errors.password)}
              style={{color: "#870000"}}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </CardContent>
          <CardActions className={classes.actions}>
            <Button type="submit" color="primary" disabled={isSubmitting}>
              LOGIN
            </Button>
            <Button color="secondary" onClick={handleReset}>
              CLEAR
            </Button>
            
          </CardActions>
          <div className="link"><Link>Create an account</Link></div>
         
        </Card>
      </form>
    </div>
  );
};

const Form = withFormik({
  mapPropsToValues: ({
    username,
    password
  }) => {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .email("Enter your username")
      .required("UserName is required"),
    password: Yup.string()
      .min(8, "Password must contain at least 8 characters")
      .required("Enter your password")
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // submit to the server
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
})(Login);

export default withStyles(styles)(Form);
import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        localStorage.getItem("user")
        ? <Component {...props} />
        : <Redirect t0{{ pathname: "/login", state: { from: props.location}}} />
    )} />
)
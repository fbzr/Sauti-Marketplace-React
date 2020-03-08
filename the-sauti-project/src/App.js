<<<<<<< HEAD
import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "./utils/";
import { alertInfo } from "./actions";
import { PrivateRoute } from "./components/PrivateRoute";
import { HomePage } from "./HomePage/";
import { LoginPage } from "./LoginPage";
import { Register } from "./Register";


class App extends React.Component {
  constructor(props) {
    super(props)
    
    history.listen((location, action) => {
      this.props.clearAlerts()
    })
  }
  render() {

    const { alert } = this.props;
    return (
        <div className="jumbotron">
            <div className="container">
                <div className="col-sm-8 col-sm-offset-2">
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>
                        <Switch>
                            <PrivateRoute exact path="/" component={HomePage} />

                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={Register} />
                            <Redirect from="*" to="/register" component={Register} />
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
}

=======
import React, { Fragment, useState, useEffect } from 'react';
import { Route, Redirect, Switch, useHistory } from 'react-router-dom';
import SignUp from './components/SignUp';
import { CssBaseline } from '@material-ui/core';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Listings from './components/Listings';
import PriceList from './components/PriceList';
import Homepage from './components/Homepage';
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './muiTheme';

function App() {
  const history = useHistory();
  const [credentials, setCredentials] = useState({ 
    token: sessionStorage.getItem('token') || '',
    id: sessionStorage.getItem('id') || '' 
  });

  useEffect(() => {
    sessionStorage.setItem('token', credentials.token);
    sessionStorage.setItem('id', credentials.id);
  }, [credentials]);

  const handleLogin = (loginToken, loginUserId) => {
    setCredentials({
      token: loginToken,
      id: loginUserId
    });

    history.push('/');
  }

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <CssBaseline />
        <NavBar />
        <Switch>
          <Route exact path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route exact path='/signup'>
            <SignUp handleLogin={handleLogin} />
          </Route>
          <ProtectedRoute exact path='/' component={Homepage} />
          <ProtectedRoute exact path='/listings' component={Listings} userId={credentials.id} />
          <ProtectedRoute exact path='/prices' component={PriceList} />        
          <Redirect from='*' to='/' />
        </Switch>
      </Fragment>
    </ThemeProvider>
  );
>>>>>>> 0c3631c458dcf3c0838c644193b2c939d6769cc8
}

                function mapState(state) {
                  const { alert } = state;
                  return { alert };
              }
              
              const actionCreators = {
                  clearAlerts: alertInfo.clear
              };
              
              const connectedApp = connect(mapState, actionCreators)(App);
              export { connectedApp as App };
  

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

const useStateWithSessionStorage = sessionStorageKey => {
  // initialize token with its value from session storage (if it exists)
  const [value, setValue] = useState(
    sessionStorage.getItem(sessionStorageKey) || ''
  );

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, value);
  }, [value]);

  return [value, setValue];
}

function App() {
  const [token, setToken] = useStateWithSessionStorage('token');
  const history = useHistory();

  const handleToken = token => {
    setToken(token);
    history.push('/');
  }

  return (
    <Fragment>
      <CssBaseline />
      <NavBar />
      <Switch>
        <Route exact path='/login'>
          <Login handleToken={handleToken} />
        </Route>
        <Route exact path='/signup'>
          <SignUp handleToken={handleToken} />
        </Route>
        <ProtectedRoute exact path='/' component={Homepage} />
        <ProtectedRoute exact path='/listings' component={Listings} />
        <ProtectedRoute exact path='/prices' component={PriceList} />        
        <Redirect from='*' to='/' />
      </Switch>
    </Fragment>
  );
}

export default App;

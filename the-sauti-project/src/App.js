import React, { Fragment, useState, useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
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

  return (
    <Fragment>
      <CssBaseline />
      <NavBar />
      <Switch>
        <Route exact path='/login'>
          <Login setToken={setToken} />
        </Route>
        <Route exact path='/signup'>
          <SignUp setToken={setToken} />
        </Route>
        <ProtectedRoute exact path='/' component={Homepage} />
        <ProtectedRoute exact path='/listings' component={Listings} />
        <ProtectedRoute exact path='/prices' component={PriceList} />        
        {/* <Redirect to='/' /> */}
      </Switch>
    </Fragment>
  );
}

export default App;

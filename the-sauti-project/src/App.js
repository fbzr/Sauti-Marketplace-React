import React, { Fragment, useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import { CssBaseline } from '@material-ui/core';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Listings from './components/Listings';
import PriceList from './components/PriceList';

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
  debugger
  return (
    <Fragment>
      <CssBaseline />
      <NavBar />
      <Route exact path={['/login', '/']}>
        <Login />
      </Route>
      <Route exact path='/signup'>
        <SignUp setToken={setToken} />
      </Route>
      <Route exact path='/listings'>
        <Listings />
      </Route>
      <Route exact path='/prices'>
        <PriceList />
      </Route>
    </Fragment>
  );
}

export default App;

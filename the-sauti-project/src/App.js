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

const useStateWithSessionStorage = sessionStorageKey => {
  // initialize token with its value from session storage (if it exists)
  const [value, setValue] = useState(
    sessionStorage.getItem(sessionStorageKey) || ''
  );

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, value);
  }, [value, sessionStorageKey]);

  return [value, setValue];
}

function App() {
  const [token, setToken] = useStateWithSessionStorage('token');
  // const [userId, setUserId] = useStateWithSessionStorage('userId');
  // const [userId, setUserId] = useState(''); 
  const history = useHistory();

  const handleLogin = (loginToken, loginUserId) => {
    setToken(loginToken);
    // setUserId(loginUserId);
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
          <ProtectedRoute exact path='/listings' component={Listings} />
          <ProtectedRoute exact path='/prices' component={PriceList} />        
          <Redirect from='*' to='/' />
        </Switch>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;

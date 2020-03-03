import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import { CssBaseline } from '@material-ui/core';
import Login from './components/Login';
import NavBar from './components/NavBar';

function App() {
  return (
    <Fragment>
      <CssBaseline />
     <NavBar />
      <Route exact path='/login'>
       <Login />
      </Route>
      <Route exact path='/signup'>
        <SignUp />
      </Route>
     
    </Fragment>
  );
}

export default App;

import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import { CssBaseline } from '@material-ui/core';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Listings from './components/Listings';
import User from './components/User';
import PriceList from './components/PriceList';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Route exact path={['/','/login']}>
        <NavBar />
        <Login />
      </Route>
      <Route exact path='/signup'>
        <NavBar />
        <SignUp />
      </Route>
      <Route exact path='/listings'>
        <Listings />
      </Route>
      <Route exact path='/users/:id'>
        <User />
      </Route>
      <Route exact path='/prices'>
        <PriceList />
      </Route>
    </Fragment>
  );
}

export default App;

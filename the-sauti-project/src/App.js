import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import { CssBaseline } from '@material-ui/core';
import Login from './components/Login';
import NavBar from './components/NavBar';
import ProductsList from './components/ProductsList';
import UsersProducts from './components/UsersProducts';

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
      <Route exact path='/products'>
        <ProductsList />
      </Route>
      <Route exact path='/users/:id'>
        <UsersProducts />
      </Route>
    </Fragment>
  );
}

export default App;

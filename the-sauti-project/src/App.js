import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import { CssBaseline } from '@material-ui/core';
import Login from './components/Login';
import NavBar from './components/NavBar';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <NavBar />
      <Route exact path={['/','/login']}>
       <Login />
      </Route>
      <Route exact path='/signup'>
        <SignUp />
      </Route>
      <Route exact path='/products'>
        <ProductsList />
      </Route>
    </Fragment>
  );
}

export default App;

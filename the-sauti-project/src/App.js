import React, { Fragment, useState } from 'react';
import { Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import { CssBaseline } from '@material-ui/core';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Listings from './components/Listings';
import User from './components/User';
import PriceList from './components/PriceList';

function App() {
  const [user, setUser] = useState();

  return (
    <Fragment>
      <CssBaseline />
      <NavBar />
      <Route exact path='/login'>
        <Login setUser={setUser} />
      </Route>
      <Route exact path='/signup'>
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

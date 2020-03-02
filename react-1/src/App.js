import React from 'react';
import { Route } from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
  return (
    <Route exact path='/signup'>
      <SignUp />
    </Route>
  );
}

export default App;

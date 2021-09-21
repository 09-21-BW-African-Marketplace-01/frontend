import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ItemCard from './components/Items/ItemCard';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Login from './components/Login';
import Logout from './components/Logout';
import HomePage from './components/HomePage';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <ItemCard />
      <Switch>
        <Route path='/profile/:id' component={Profile} />
        <Route path='/logout' component={Logout} />
        <Route path='/login' component={Login} />
        <Route path='/' component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;

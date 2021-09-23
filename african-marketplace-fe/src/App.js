import React from 'react';
import './index.css'
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

import ItemCard from './components/Items/ItemCard';
import NavBar from './components/NavBar';
import Profile from './components/Profile/Profile';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import HomePage from './components/HomePage/HomePage';
import ViewMarket from './components/ViewMarket';


function App() {
  const isLoggedIn = localStorage.getItem('token') ? true : false;

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/market/:id' component={ViewMarket} />  
        <Route path='/market' component={ItemCard} />
        <PrivateRoute path='/profile/'>
          <Profile isLoggedIn={isLoggedIn}/>
        </PrivateRoute>
        <Route path='/register' component={Register}/>
        <PrivateRoute path='/logout'>
          <Logout />
        </PrivateRoute>
        <Route path='/login' component={Login} />
        <Route exact path='/' component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;

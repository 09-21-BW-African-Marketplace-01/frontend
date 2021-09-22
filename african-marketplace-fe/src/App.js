import React from 'react';
import './index.css'
import { Route, Switch } from 'react-router-dom';
import ItemCard from './components/Items/ItemCard';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import HomePage from './components/HomePage/HomePage';
import ViewMarket from './components/ViewMarket';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/market/:id' component={ViewMarket} />  
        <Route path='/market' component={ItemCard} />
        <Route path='/profile/:id' component={Profile} />
        <Route path='/register' component={Register}/>
        <Route path='/logout' component={Logout} />
        <Route path='/login' component={Login} />
        <Route exact path='/' component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;

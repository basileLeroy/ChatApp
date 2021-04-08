import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './dev/Pages/Home'
import Chats from './dev/Pages/ListOfRooms'
import ChatRooms from './dev/Pages/SelectedChat'


const App = () => {

  return (
      
    <div className="">
      <Switch>
        <Route 
          path="/" 
          exact 
          component={Home}
        />
        <Route 
          path="/chatrooms" 
          exact 
          component={Chats}
        />
        <Route 
          path="/room" 
          exact 
          component={ChatRooms}
        />
      </Switch>
  </div>
  );
}

export default App;

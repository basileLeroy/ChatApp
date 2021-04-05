import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './Pages/HomePage/Home'
import Chats from './Pages/ChatList/Chats'
import ChatRooms from './Pages/ChatRooms/ChatRooms'


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
          path="/chats" 
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

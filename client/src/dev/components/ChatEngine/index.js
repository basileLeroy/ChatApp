import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'

import { ChatEngineContext } from '../Context'

import _ from 'lodash'

import Socket from '../Socket'

import ChatList from './ChatList'
import ChatFeed from './ChatFeed'
import ChatSettings from './ChatSettings'

import { Row, Col } from 'react-grid-system'
import { setConfiguration } from 'react-grid-system';
 
setConfiguration({ maxScreenClass: 'xl', gutterWidth: 0 });

const ChatEngine = props => {
  
  const context = useContext(ChatEngineContext)
  const { height } = props
  const propsAndContext = {...props, ...context}

  return (
    <div style={{ textAlign: 'left', backgroundColor: 'white' }}>
      <Socket
        projectID='3f78a1ff-b807-4a82-b8e1-aeab29b74a34'
        userName='Tetris'
        userSecret='password_123'
      />

      <ChatList {...propsAndContext} />
    </div>
  )
}

export default ChatEngine
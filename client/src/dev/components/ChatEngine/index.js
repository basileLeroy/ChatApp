import React, { useContext } from 'react'

import { ChatEngineContext } from '../Context'

import _ from 'lodash'

import {Socket} from 'react-chat-engine'

import ChatList from './ChatList'
import ChatFeed from './ChatFeed'
import ChatSettings from './ChatSettings'


const ChatEngine = props => {
  const context = useContext(ChatEngineContext)

  const propsAndContext = {...props, ...context}

  return (
    <div style={{ textAlign: 'left', backgroundColor: 'white' }}>
      <Socket 
          projectID='3f78a1ff-b807-4a82-b8e1-aeab29b74a34'
          userName='Tetris'
          userSecret='123123'
      />
 
      <ChatList {...propsAndContext} />
        
    </div>
  )
}

export default ChatEngine
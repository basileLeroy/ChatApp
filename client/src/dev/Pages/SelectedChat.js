  
import React from 'react'

import { ChatEngineWrapper, Socket, ChatFeed } from 'react-chat-engine'

const ChatRooms = () => {
    return (
        <div>
            <ChatEngineWrapper>
                <Socket 
                    projectID='3f78a1ff-b807-4a82-b8e1-aeab29b74a34'
                    userName='Tetris'
                    userSecret='123123'
                />

                <ChatFeed chatID={12999} />                
            </ChatEngineWrapper>

        </div>
    )
}

export default ChatRooms;
import React from 'react'
import { ChatEngineWrapper, Socket, ChatList } from 'react-chat-engine'


const Chats = () => {

    return (
        <div>
            <ChatEngineWrapper>
                <Socket 
                    projectID='3f78a1ff-b807-4a82-b8e1-aeab29b74a34'
                    userName='Tetris'
                    userSecret='password_123'
                />

                <ChatList />                        
            </ChatEngineWrapper>
            
        </div>
    )
}

export default Chats


;
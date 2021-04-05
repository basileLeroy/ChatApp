import React from 'react'
import { ChatEngineWrapper, Socket } from 'react-chat-engine'
import ChatList from '../components/ChatEngine/ChatList/index'


const Chats = () => {

    return (
        <div>
            <ChatEngineWrapper>
                <Socket 
                    projectID='3f78a1ff-b807-4a82-b8e1-aeab29b74a34'
                    userName='Tetris'
                    userSecret='123123'
                />

                <ChatList />                        
            </ChatEngineWrapper>
            
        </div>
    )
}

export default Chats;
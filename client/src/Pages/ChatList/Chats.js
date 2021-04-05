import React from 'react'
import { ChatEngineWrapper, ChatSocket, ChatList } from 'react-chat-engine'


const Chats = () => {
    const prod = false;

    const projectID = prod ? '...' : '3f78a1ff-b807-4a82-b8e1-aeab29b74a34'
    const chatID = prod ? 0 : 12999
    const chatAccessKey = prod ? '123' : 'ca-590925fc-8973-4282-a8ab-f0961f6940cf'
    const senderUsername = 'Tetris'


    return (
        <div>
            <ChatEngineWrapper>
                <ChatSocket 
                    development={!prod}
                    projectID={projectID}
                    chatID={chatID}
                    chatAccessKey={chatAccessKey}
                    senderUsername={senderUsername}
                />

                <ChatList development={!prod}/>                        
            </ChatEngineWrapper>
            
        </div>
    )
}

export default Chats


;
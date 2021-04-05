import React, { useState, useEffect } from 'react'

import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine'

const ChatRooms = () => {

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

                <ChatFeed 
                    development={!prod}
                    projectID={projectID}
                    chatID={chatID}
                    chatAccessKey={chatAccessKey}
                    activeChat={chatID}
                    senderUsername={senderUsername}
                />                      
            </ChatEngineWrapper>

        </div>
    )
}

export default ChatRooms;
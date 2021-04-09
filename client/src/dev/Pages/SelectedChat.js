  
import React from 'react'

import { ChatEngineWrapper, ChatEngine, ChatSocket, ChatFeed } from 'react-chat-engine'

const ChatRooms = () => {
    return (
        <div>
            <ChatEngineWrapper>
                <ChatSocket 
                    projectID='3f78a1ff-b807-4a82-b8e1-aeab29b74a34'
                    chatID={12999}
                    chatAccessKey="ca-590925fc-8973-4282-a8ab-f0961f6940cf"
                    senderUsername='Any Name You Want'
                />

                <ChatFeed activeChat={12999} />
            </ChatEngineWrapper>

        </div>
    )
}

export default ChatRooms;
import React, { useContext } from 'react'
import { getMyData } from 'react-chat-engine';

import ChatEngine from './ChatEngine'

import { ChatEngineWrapper, ChatEngineContext } from './Context'

const ChatEngineApp = (props) => {

    const authObject = {
        'Project-ID':   '3f78a1ff-b807-4a82-b8e1-aeab29b74a34',
        'User-Name':    'Tetris',
        'User-Secret':  '123123'
    }

    getMyData(authObject, (data) => console.log(data))

    if (useContext(ChatEngineContext)) {
        return <ChatEngine {...props} />
    } else {
        return 
            <ChatEngineWrapper>

                <ChatEngine {...props} />

            </ChatEngineWrapper>
    }
    
}

export default ChatEngineApp

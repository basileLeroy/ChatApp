import React, { useContext } from 'react'
import { getMyData } from 'react-chat-engine';

import ChatEngine from './ChatEngine'

import { ChatEngineWrapper, ChatEngineContext } from './Context'

const ChatEngineApp = (props) => {

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

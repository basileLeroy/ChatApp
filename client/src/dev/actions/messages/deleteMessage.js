import axios from 'axios'
import * as str from '..'
import { getHeaders } from '../auth'

export function deleteMessage(props, chatId, messageId, callback) {
    axios.delete(
        `${str.getApiUrl(props)}/chats/${chatId}/messages/${messageId}/`,
        { headers: getHeaders(props) }
    )

    .then((response) => {
        callback && callback(response.data)
    })
    
    .catch((error) => {
        console.log('Delete Messages Error', error)
    });
}
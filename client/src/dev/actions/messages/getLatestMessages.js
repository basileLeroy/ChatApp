import axios from 'axios'
import * as str from '..'
import { getHeaders } from '../auth'

export function getLatestMessages(props, chatId, count, callback) {
    axios.get(
        `${str.getApiUrl(props)}/chats/${chatId}/messages/latest/${count}/`,
        { headers: getHeaders(props) }
    )

    .then((response) => {
        props.onGetMessages && props.onGetMessages(chatId, response.data)

        callback && callback(chatId, response.data)
    })
    
    .catch((error) => {
        console.log('Fetch Latest Messages Error', error)
    });
}
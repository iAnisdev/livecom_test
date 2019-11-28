import API from '@/plugins/API'
import router from '@/router/index'
import Cookies from '@/plugins/Cookies'

export const sendUserMessage = ({ commit, dispatch }, data) => {
    let access_token = Cookies.getCookies('access_token')
    return new Promise((resolve, reject) => {
        let messagesArr = []
        messagesArr.push(data)
        commit('SET_CHAT_MESSAGES', messagesArr)
        resolve()
        // API().post(`/sendmessage?access_token=${access_token}`, JSON.stringify(data)).then((res) => {
        //     console.log('res ', res.data)
        // })
    })
}

export const getMessages = ({ commit, dispatch }, data) => { //
    let access_token = Cookies.getCookies('access_token')
    return new Promise((resolve, reject) => {
        API().post(`/getmessage?access_token=${access_token}`, JSON.stringify(data)).then((res) => {
            console.log('res ', res.data)
        })
    })
}

export const ackMessagesList = ({ commit, dispatch }, data) => {
    let access_token = Cookies.getCookies('access_token')
    return new Promise((resolve, reject) => {
        API().post(`/ackmessage?access_token=${access_token}`, JSON.stringify(data)).then((res) => {
            console.log('res ', res.data)
        })
    })
}
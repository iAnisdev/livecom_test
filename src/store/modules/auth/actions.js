import API from '@/plugins/API'
import router from '@/router/index'
import Cookies from '@/plugins/Cookies'
const cryptoJS = require('crypto-js')

export const getAccessToken = ({ commit, dispatch }) => {
    console.log('getAccessToken ')
    let secret = 'f4oUBmNb3PZ3'
    let random = Math.floor(Math.random() * 100000000)
    let appid = 'philipsvideochat_2'
    let sign = cryptoJS.MD5(`${secret}${random}${secret}`).toString()
    return new Promise((resolve, reject) => {
        API().get(`/gettoken?acc_openid=${appid}&random=${random}&sign=${sign}`).then((res) => {
            let access_token = res.data.access_token
            Cookies.setCookie('access_token', access_token, 2)
            commit('SET_ACCESS_TOKEN', access_token)
        })
    })
}

export const agentLogin = ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
        commit('SET_LOGIN_STATUS', true)
        router.push('/dashboard')
    })
}

export const createUser = ({ commit, dispatch }, data) => {
    let access_token = Cookies.getCookies('access_token')
    return new Promise((resolve, reject) => {
        let user = {
            id: 'lc_12345',
            username: data.nickname
        }
        commit('SET_ACTIVE_USER', user)
        resolve(user)
        // API().post(`/usercreate?access_token=${access_token}`, JSON.stringify(data)).then((res) => {
        //     console.log('res ', res.data)
        // })
    })
}

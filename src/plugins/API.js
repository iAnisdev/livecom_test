import axios from 'axios'

export default () =>{
    return axios.create({
        baseURL: 'https://test.livecom.cn/lcchannel/videochat'
    })
}
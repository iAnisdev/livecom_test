import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
    isLoggedIn: false,
    token: '',
    user_id: '',
    acc_openid: 'philipsvideochat_2',
    user: {}
}

export default {
    state,
    actions,
    mutations,
    getters
}
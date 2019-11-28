import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth/store'
import message from './modules/message/store'
Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules:{
    auth,
    message
  }
})

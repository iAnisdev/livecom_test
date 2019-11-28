import Vue from 'vue'
import App from './App.vue'
import router from './router'

//store globally import
import store from './store'

//vuetify globally import
import vuetify from './plugins/vuetify';

//filters globally import
import './plugins/filters'

//moments JS globally import
import './plugins/moment'

//scss globally import
import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

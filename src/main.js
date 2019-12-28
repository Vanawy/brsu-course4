import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueCookie from 'vue-cookie';

Vue.config.productionTip = false
Vue.use(VueCookie)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

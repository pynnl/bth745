import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import wysiwyg from 'vue-wysiwyg'
import 'vue-wysiwyg/dist/vueWysiwyg.css'

Vue.config.productionTip = false
Vue.use(wysiwyg)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

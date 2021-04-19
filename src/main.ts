import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import "@babylonjs/loaders/glTF";
import './styles.scss'
import { auth } from './firebase'

Vue.config.productionTip = false

Vue.use(VueMeta)

let app: any;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

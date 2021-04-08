import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import "@babylonjs/loaders/glTF";
import './styles.scss'
import { auth } from './firebase'

Vue.config.productionTip = false

let app: any;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})


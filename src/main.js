import { firebaseApp } from './firebase/firebase'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuefire from 'vuefire'

Vue.config.productionTip = false

Vue.use(Vuefire)

let app
firebaseApp.auth().onAuthStateChanged(
  (user) => {
    if (!app) {
      app = new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>'
      })
    }
  }
)

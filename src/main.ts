import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './routes'
import VueCookies from 'vue-cookies'



createApp(App)
.use(VueCookies)
.use(store)
.use(router)
.mixin({methods: {
    getCookie(name:any) {
      return this.$cookies.get(name);
    }
  }})
.mount('#app')


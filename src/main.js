import Vue from 'vue';
import App from './App.vue';
import router from "./router"
import store from './store';
import "./common";
import axios from 'axios'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.config.productionTip = false
// Vue.use(ElementUI)
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = axios
import 'swiper/dist/css/swiper.css'
new Vue({
router,
store,
  render: h => h(App),
}).$mount('#app')

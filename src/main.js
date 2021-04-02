import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 引入iconfont
import "./assets/icon/iconfont.css";
import axios from "axios";
import VueAxios from "vue-axios";
// import * as edge from 'electron-edge-js';
// console.log(edge)
Vue.use(VueAxios, axios);

Vue.use(ElementUI);
Vue.prototype.$electron = Window.electron;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

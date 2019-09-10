import Vue from 'vue';
import axios from 'axios';
import {
  Upload,
  Button,
  Icon,
  Notice,
} from 'iview';
import App from './App.vue';
import router from './router';
import store from './store';
import 'iview/dist/styles/iview.css';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 3000,
});
Vue.prototype.$http = instance;
Vue.prototype.$Notice = Notice;
Vue.component('Upload', Upload);
Vue.component('Button', Button);
Vue.component('Icon', Icon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

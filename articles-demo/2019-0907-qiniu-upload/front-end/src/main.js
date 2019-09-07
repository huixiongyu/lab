import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'iview/dist/styles/iview.css';
import { 
  Upload,
  Button,
 } from 'iview';

Vue.component('Upload', Upload);
Vue.component('Button', Button);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

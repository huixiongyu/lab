import Vue from 'vue';
import {
  Button,
  Input,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Input);
Vue.use(Button);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

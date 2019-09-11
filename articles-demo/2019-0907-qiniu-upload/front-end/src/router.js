import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/postname',
      name: 'post-name',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/WithName.vue'),
    },
    {
      path: '/formdata',
      name: 'form-data',
      component: () => import('./views/FormData.vue'),
    },
    {
      path: '/preview',
      name: 'preview',
      component: () => import('./views/Preview.vue'),
    },
    {
      path: '/manual',
      name: 'manual',
      component: () => import('./views/Manual.vue'),
    },
    {
      path: '/multiple',
      name: 'multiple',
      component: () => import('./views/Multiple.vue'),
    },
  ],
});

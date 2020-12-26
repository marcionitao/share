import Vue from 'vue';
import Router from 'vue-router';
import CodeGeneration from './views/CodeGeneration.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'CodeGeneration',
      component: CodeGeneration,
    },
  ],
});

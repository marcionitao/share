import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import VueCodemirror from 'vue-codemirror';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueCodemirror);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

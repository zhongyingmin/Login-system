// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';

import './assets/styles/style.css';
import './styles/reset.scss'

//element-ui
import ElementUI from 'element-ui';
import '@/icons';
import 'element-ui/lib/theme-chalk/index.css';

import { Overlay, Icon } from 'vant';
import 'vant/lib/Overlay/style';

Vue.use(Overlay, Icon);
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

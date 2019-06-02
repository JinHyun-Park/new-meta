import 'babel-polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import './plugins/axios';
import Vuetify, {
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VToolbar,
  VFadeTransition,
} from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives';
import App from './App.vue';
import router from './router';
import store from './store/store';

import 'vuetify/dist/vuetify.min.css';
import 'vuetify/src/stylus/app.styl';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VToolbar,
    VFadeTransition,
  },
  directives: {
    Ripple,
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

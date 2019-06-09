import Vue from 'vue';
import Vuex from 'vuex';
// import RegModule from './modules/regModule/toggle';
import modules from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    text3: 'center',
    text4: 'left',
  },
  modules,
  // modules: {
  //   // reg: RegModule,
  //   modules,
  // },
});

export default store;

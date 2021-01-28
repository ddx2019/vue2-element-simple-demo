import Vue from 'vue';
import Vuex from 'vuex';
import layout from './modules/layout';
import permission from './modules/permission';
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    layout,
    permission
  }
});

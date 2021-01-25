import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';
import './plugins/video.js';
import './plugins/jsonViewer.js';
import './icons';
import 'default-passive-events'; //添加事件管理者'passive'，来阻止'touchstart'事件，让页面更加流畅。 解决chrome下的warning问题
import './assets/style/main.css';
import './assets/theme/green.scss';
import './assets/style/common.scss';
import './utils/directive.js';

import { getViewHeight } from '@/utils/getViewHeight.js';
import { getOperateInfo } from '@/enums/OperateBtn.js';
import { filterAddUpdate } from '@/enums/filtersAboutOpt.js';
import {
  ComnPagination,
  ComnBtn,
  ComnDialog,
  ComnTree,
  ComnSteps,
  ComnRuleBtns
} from './components';
Vue.component('comn-btn', ComnBtn);
Vue.component('comn-pagination', ComnPagination);
Vue.component('comn-dialog', ComnDialog);
Vue.component('comn-tree', ComnTree);
Vue.component('comn-steps', ComnSteps);
Vue.component('comn-rule-btns', ComnRuleBtns);
Vue.config.productionTip = false;
Vue.prototype.$getViewHeight = getViewHeight;
Vue.prototype.$getOperateInfo = getOperateInfo;
Vue.prototype.filterAddUpdate = filterAddUpdate;
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');

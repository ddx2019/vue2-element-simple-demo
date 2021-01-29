import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    component: Home,
    meta: { title: '自述' },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard'),
        meta: { title: '系统首页' }
      },
      {
        path: '/table',
        name: 'table',
        component: () => import('@/views/pages/BaseTable.vue'),
        meta: { title: '基础表格' }
      },
      {
        path: '/tree',
        name: 'tree',
        component: () => import('@/views/pages/BaseTree.vue'),
        meta: { title: '基础表格' }
      },
      {
        path: '/markdown',
        name: 'markdown',
        component: () => import('@/components/MarkDown.vue'),
        meta: { title: 'MarkDown' }
      },
      {
        path: '/cronExp',
        name: 'cronExp',
        component: () => import('@/views/pages/UsedCronModal.vue'),
        meta: { title: '定时任务与cron表达式' }
      },
      {
        path: '/antdIcon',
        name: 'antdIcon',
        component: () => import('@/views/pages/UsedAntdIcon.vue'),
        meta: { title: 'antds的icon组件' }
      },
      {
        path: '/tabs',
        component: () => import('../components/Tabs.vue'),
        meta: { title: 'tab选项卡' }
      },
      {
        path: '/pdf',
        name: 'pdf',
        component: () => import('@/views/pages/PreviewPDF.vue'),
        meta: { title: 'pdf在线预览' }
      },
      {
        path: '/videojs',
        name: 'videojs',
        component: () => import('@/views/pages/VideoJsTest.vue'),
        meta: { title: 'videojs播放m3u8文件' }
      },
      {
        path: '/dragList',
        name: 'dragList',
        component: () => import('@/views/pages/UsedVueDraggable.vue'),
        meta: { title: '拖拽列表' }
      },
      {
        path: '/hlsjs',
        name: 'hlsjs',
        component: () => import('@/components/tests/video/hlsjsTest.vue'),
        meta: { title: 'videojs播放m3u8文件' }
      },
      {
        path: '/404',
        component: () => import('@/components/404.vue'),
        meta: { title: '404' }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    meta: { title: '登录' }
  },

  {
    path: '*',
    redirect: '/404'
  }
  // {
  //   name: "test",
  //   path: "/test",
  //   component: () => import("@/components/tests/index.vue")
  // },
  // {
  //   name: "pdf",
  //   path: "/pdf",
  //   component: () => import("@/components/tests/pdf/PreviewPDF.vue"),
  //   meta: { title: "pdf在线预览" }
  // }
];

const router = new VueRouter({
  routes
});

// 解决重复点击导航栏，vue-router报错问题
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((err) => err);
};

export default router;

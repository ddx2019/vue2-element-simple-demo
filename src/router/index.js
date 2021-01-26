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
        path: '/markdown',
        name: 'markdown',
        component: () => import('@/components/MarkDown.vue'),
        meta: { title: 'MarkDown' }
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
        path: '/hlsjs',
        name: 'hlsjs',
        component: () => import('@/components/tests/video/hlsjsTest.vue'),
        meta: { title: 'videojs播放m3u8文件' }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    meta: { title: '登录' }
  },
  {
    path: '/tabs',
    component: () => import('../components/Tabs.vue'),
    meta: { title: 'tab选项卡' }
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

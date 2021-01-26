/**
 * 
 *  动态路由 ：SideBar组件也要做相应改变，如computed中 ： 
 * items() {
      if (this.routerFlag) {
        return this.modelList; // 非动态路由时候的侧边栏。
        // return this.sideBarLis.modelList;
      } else {
        return this.sysmList;
        // return this.sideBarLis.sysmList;
      }
    },
    ...mapState({ sideBarLis: state => state.perms.sideBarLis }) ...mapState({ sideBarLis: state => state.perms.sideBarLis }) 
 */

// import Vue from 'vue';
// import NProgress from 'nprogress'; // 引入nprogress 进度条
// import 'nprogress/nprogress.css'; //引入nprogress的样式
// import Router from 'vue-router';
// import { roleResource } from '@/api/login.js';
// import store from '@/stores';

// import { changeHumpToLowerCase } from '@/utils/HumpToLowerCase.js';
// Vue.use(Router);

// export const CONSTANT_ROUTES = [
//   {
//     path: '/login',
//     name: 'login',
//     component: () => import('@/views/login/Login.vue'),
//     meta: { title: '登录' }
//   },
//   {
//     path: '/test',
//     component: () => import('@/components/test/test.vue')
//   },
//   {
//     path: '/404',
//     component: () => import('@/components/page/404.vue'),
//     meta: { title: '404' }
//   }
//   // {
//   //   path: "/",
//   //   redirect: "/workbench/system/system_config/tree"
//   // }
// ];

// const router = new Router({
//   model: 'history',
//   // 解决vue框架页面跳转有白色不可追踪色块的bug
//   scrollBehavior: () => ({ x: 0, y: 0 }),
//   routes: CONSTANT_ROUTES
// });

// // 定义一个函数来创建router
// export const createRouter = (routes) =>
//   new Router({
//     mode: 'history',
//     routes
//   });

// // 解决重复点击导航栏，vue-router报错问题
// const routerPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch((err) => err);
// };

// router.beforeEach((to, from, next) => {
//   document.title = `${to.meta.title} | vue2-element-simple-demo`;
//   const token = localStorage.getItem('loginStatus');
//   NProgress.start();
//   if (!token) {
//     if (to.path === '/login') {
//       next();
//     } else if (to.path === '/404') {
//       next();
//     } else {
//       next('/login');
//     }
//     NProgress.done();
//   } else {
//     // 拿到了权限角色， 根据roles权限生成可访问的路由表
//     if (!store.state.perms.isLoadedRoutes) {
//       store.commit('SET_ISLOADEDROUTES', true);

//       let resourceTypes = localStorage.getItem('resourceTypes');

//       resourceTypes = JSON.parse(resourceTypes);
//       let role = resourceTypes.role;

//       let accessRoutes = [];
//       getResourceType({ resourceTypes: role }).then((res) => {
//         accessRoutes = filterRouters(res);
//         //  获取 sidebars menus list
//         store.commit('SET_SDIEBARLIST', handleSidebarRoutes(res));

//         let workbench = {
//           path: '/workbench',
//           component: loadPageByRoutes('layout'),
//           redirect: '/workbench/system/system_config/tree'
//         };
//         workbench['children'] = accessRoutes;
//         if (accessRoutes.length > 0) {
//           // 重置当前router的match = 初始router.match ;解决刷新后，路由重复的warning问题
//           router.match = createRouter(CONSTANT_ROUTES).match;
//           router.addRoutes([workbench]); // 动态添加可访问路由表
//           accessRoutes.push(
//             //最后添加它，避免bug
//             {
//               path: '*',
//               redirect: '/404'
//             }
//           );
//           NProgress.done();
//           // IE10及以下不进入富文本编辑器，该组件不兼容
//           if (navigator.userAgent.indexOf('MSIE') > -1) {
//             Vue.prototype.$alert(
//               'vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看',
//               '浏览器不兼容通知',
//               {
//                 confirmButtonText: '确定'
//               }
//             );
//           }
//         }
//       });
//       next({ ...to, replace: true });
//     } else {
//       next();
//       NProgress.done();
//     }
//   }
// });

// // 根据角色获取资源————后台返回的路由表
// async function getResourceType(resourceTypes) {
//   let result = [];
//   await roleResource(resourceTypes)
//     .then((res) => {
//       if (res.resultCode === 200) {
//         result = res.data;
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   return result;
// }

// // 将后台传回的数据格式转为需要的格式
// function filterRouters(routers) {
//   let accessRoutes = routers.map((val) => {
//     let routerItem = {
//       path: val.operationUrl,
//       component: loadPageByRoutes(val.components),
//       meta: {
//         title: val.name, // 该name是中文名
//         belong: val.meta
//       },
//       name: changeHumpToLowerCase(val.code), //以code来确定路由的name
//       parentId: val.parentId,
//       id: val.id,
//       redirect: val.redirect,
//       icon: val.icon
//     };
//     return routerItem;
//   });
//   return formTreeByParentId(accessRoutes, 'root'); // 拼成有children的router表
// }

// // 加载页面
// function loadPageByRoutes(str) {
//   return function(resolve) {
//     require([`@/views/${str}.vue`], resolve);
//   };
// }

// function formTreeByParentId(records, id) {
//   var result = [];
//   records.forEach((val) => {
//     if (val.parentId === id) {
//       let parent = val;
//       parent.children = getChilds(val.id, records);
//       result.push(parent);
//     }
//   });
//   return result;
// }

// function getChilds(id, array) {
//   let childs = [];
//   array.forEach((val) => {
//     if (id === val.parentId) {
//       childs.push(val);
//     }
//   });
//   childs.forEach((childNode) => {
//     let currNode = getChilds(childNode.id, array);
//     if (currNode.length > 0) {
//       childNode.children = currNode;
//     }
//   });
//   return childs;
// }

// //  处理侧边栏需要的路由数据格式
// function handleSidebarRoutes(arrs) {
//   let accessRoutes = arrs.map((val) => {
//     let routerItem = {
//       code: val.code, // 用于判断顶层
//       path: val.operationUrl, // 用于拼接Sidebar中菜单 需要的index
//       title: val.name, // 该name是中文名
//       belong: val.meta, // 用于判断 是属于系统管理，还是数据建模平台模块
//       parentId: val.parentId,
//       id: val.id,
//       icon: val.icon
//     };
//     return routerItem;
//   });
//   let sysTree = formTreeByCode(accessRoutes, 'system');
//   let modelplatTree = formTreeByCode(accessRoutes, 'modelplat');
//   const sidebarsList = {
//     sysmList: sysTree,
//     modelList: modelplatTree
//   };
//   return sidebarsList;
// }

// function formTreeByCode(records, codeName) {
//   var result = [];
//   records.forEach((val) => {
//     if (val.code === codeName) {
//       let parent = val;
//       parent.subs = getSidebarChilds(val, records);
//       result.push(parent);
//     }
//   });
//   let subs = result.length ? result[0].subs : result;
//   // result是第一层,如code==='system'和code==='modelplat'的数据，故需返回其children
//   return subs;
// }

// function getSidebarChilds(data, array) {
//   let childs = [];
//   array.forEach((val) => {
//     if (data.id === val.parentId) {
//       if (val.belong === 'system') {
//         // 这里的val.path的数据格式，如：system_config 表示系统配置的path
//         val['index'] = '/workbench/system/' + data.path;
//       } else if (val.belong === 'model') {
//         val['index'] = '/workbench/modelplat/' + data.path;
//       }

//       childs.push(val);
//     }
//   });
//   // 当前的路由path和其主页面路由的path相同，name不同 （为解决侧边栏高亮和tags问题），要单独处理，
//   const specialArrs = [
//     '添加维度值',
//     '列表视图设计',
//     '详情页面模板',
//     '元素属性设置',
//     '索引维护',
//     '主外键关系',
//     '编码规则对应设置',
//     '设计表单',
//     '设计列表'
//   ];

//   childs.forEach((childNode, index) => {
//     // path相同的路由中，删除无须在sidebar中出现的路由数据
//     if (specialArrs.includes(childNode.title)) {
//       childs.splice(index, 1);
//     }
//     if (childNode.belong === 'system') {
//       // 这里的val.path的数据格式，如：system_config 表示系统配置的path
//       childNode['index'] =
//         '/workbench/system/' + data.path + '/' + childNode.path;
//     } else if (childNode.belong === 'model') {
//       childNode['index'] =
//         '/workbench/modelplat/' + data.path + '/' + childNode.path;
//     }

//     let currNode = getSidebarChilds(childNode, array);
//     if (currNode.length > 0) {
//       //path相同的路由中, 删除无须在sidebar中出现的路由数据
//       currNode.forEach((val, index) => {
//         if (specialArrs.includes(val.title)) {
//           currNode.splice(index, 1);
//         }
//       });
//       childNode.subs = currNode;
//     }
//   });
//   return childs;
// }

// export default router;

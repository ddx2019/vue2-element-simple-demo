// import axios from 'axios';
// import qs from 'qs';
// import { Message } from 'element-ui';
// const _axios = axios.create({
//   // baseURL: '/api',
//   timeout: 3000,
//   withCredentials: true
// });
// const arrs = ['/comn/test', '/comn/test2'];
// // 请求拦截
// _axios.interceptors.request.use(
//   (config) => {
//     if (arrs.includes(config.url)) {
//       config.headers = {
//         'Content-Type': 'application/json',
//         'X-Access-Token': JSON.parse(localStorage.getItem('loginStatus')).token
//       };
//     } else if (config.method === 'post' && !(config.data instanceof FormData)) {
//       config.headers = {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'X-Access-Token': JSON.parse(localStorage.getItem('loginStatus')).token
//       };
//       config.data = qs.stringify(config.data, { allowDots: true }); // FormData传参允许为 params[0].name的格式；
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // 响应拦截
// _axios.interceptors.response.use(
//   (res) => {
//     if (res.data.code === 0) {
//       return res;
//     } else {
//       Message.error(res.data.message);
//       if (res.data.code === 2010) {
//         // 特殊错误处理，登录超时
//         localStorage.removeItem('loginStatus');
//         Router.push({ path: '/login' });
//       }
//       return res;
//     }
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

import axios from 'axios';
import qs from 'qs';
const _axios = axios.create({
  timeout: 3000,
  withCredentials: true
});
_axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);

_axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    } else {
      Promise.reject();
    }
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);
export default _axios;

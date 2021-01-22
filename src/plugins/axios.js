// import axios from 'axios';
// import qs from 'qs';
// import { Message } from 'element-ui';
// const _axios = axios.create({
//   // baseURL: '/api',
//   timeout: 3000,
//   withCredentials: true
// });

// _axios.interceptors.request.use(
//   (config) => {
//     if (config.method === 'post' && !(config.data instanceof FormData)) {
//       config.headers = {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       };
//       config.data = qs.stringify(config.data, { allowDots: true });
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
// _axios.interceptors.response.use(
//   (res) => {
//     if (res.data.code !== 0) {
//       Message.error(res.data.msg);
//       return res;
//     }
//     return res;
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

import axios from '@/plugins/axios';
import API from '@/api/api.js';
// 首页报表
/**
 * @param {number} pageNum- 当前页
 * @param {number} pageSize - 每页数量
 */
export function fetchData(info) {
  return axios({
    url: './table.json',
    method: 'get',
    params: {
      ...info
    }
  });
}

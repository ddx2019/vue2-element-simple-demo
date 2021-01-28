// + - * / () > <  >= <=  <>不等于
export const SIGN_NAMES = [
  {
    name: 'JiaHao',
    title: '加',
    value: '+'
  },
  {
    name: 'JianHao',
    title: '减',
    value: '-'
  },
  {
    name: 'ChengHao',
    title: '乘',
    value: '*'
  },
  {
    name: 'ChuHao',
    title: '除',
    value: '/'
  },
  {
    name: 'DaYuHao',
    title: '大于',
    value: '>'
  },
  {
    name: 'XiaoYuHao',
    title: '小于',
    value: '<'
  },
  {
    name: 'DaYuDengYu',
    title: '大于等于',
    value: '>='
  },
  {
    name: 'XiaoYuDengYu',
    title: '小于等于',
    value: '<='
  },
  {
    name: 'BuDengYu',
    title: '不等于',
    value: '<>'
  },
  {
    name: 'ZuoKuoHao',
    title: '左括号',
    value: '('
  },
  {
    name: 'YouKuoHao',
    title: '右括号',
    value: ')'
  }
];
export const ARRS_FOR_TREE = [
  {
    name: '爷爷',
    id: 1,
    parentId: 0
  },
  {
    name: '爸爸',
    id: 2,
    parentId: 1
  },
  {
    name: '儿子',
    id: 3,
    parentId: 2
  },
  {
    name: '孙子',
    id: 4,
    parentId: 3
  },
  {
    name: '重孙',
    id: 5,
    parentId: 4
  },
  {
    name: '女儿',
    id: 6,
    parentId: 2
  }
];

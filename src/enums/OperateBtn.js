// name 可能不同，value可能相同，如添加机构和添加用户，做的都是add的这个操作
const OPERATE_ARRS = [
  {
    name: '添加',
    value: 'add',
    icon: 'el-icon-plus',
    type: 'primary'
  },
  {
    name: '修改',
    value: 'edit',
    type: 'warning',
    icon: 'el-icon-edit'
  },
  {
    name: '删除',
    value: 'del',
    type: 'danger',
    icon: 'el-icon-delete'
  },
  {
    name: '克隆',
    value: 'copy',
    type: 'success',
    icon: 'el-icon-copy-document'
  },
  {
    name: '查看详情',
    value: 'view',
    type: 'info',
    icon: 'el-icon-view'
  },

  {
    name: '开始',
    value: 'start',
    icon: 'el-icon-video-play',
    type: 'success'
  },
  {
    name: '停止',
    value: 'stop',
    icon: 'el-icon-warning-outline',
    type: 'info'
  },
  {
    name: '启用',
    value: 'unlock',
    type: 'success',
    icon: 'el-icon-unlock'
  },
  {
    name: '禁用',
    value: 'lock',
    type: 'info',
    icon: 'el-icon-lock'
  },
  {
    name: '查询',
    value: 'query',
    type: 'success',
    icon: 'el-icon-search'
  }
];
const ACTION_NAME = {
  THE_OPT_ADD_EDIT_DEL: ['添加', '修改', '删除', '启用', '禁用'],
  THE_EXAMPLE: ['添加', '修改', '删除', '查看详情'],
  TIMER_TASK: ['添加', '修改', '删除', '开始', '停止']
};
export function getOperateInfo(key) {
  return OPERATE_ARRS.filter((ele) => ACTION_NAME[key].includes(ele.name));
}

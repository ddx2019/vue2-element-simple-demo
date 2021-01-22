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
    name: '查看报告',
    value: 'query',
    type: 'success',
    icon: 'el-icon-document'
  },
  {
    name: '添加规则',
    value: 'addRule',
    icon: 'el-icon-plus',
    type: 'primary'
  },
  {
    name: '执行日志',
    value: 'move',
    icon: 'el-icon-document',
    type: 'primary'
  },
  {
    name: '开始',
    value: 'start',
    icon: 'el-icon-video-play',
    type: 'success'
  },
  {
    name: '执行方案',
    value: 'start',
    icon: 'el-icon-video-play',
    type: 'success'
  },
  {
    name: '停止',
    value: 'pause',
    icon: 'el-icon-warning-outline',
    type: 'info'
  }
  // {
  //   name: "查询",
  //   value: "query",
  //   type: "success",
  //   icon: "el-icon-search"
  // },
  // {
  //   name: "启用",
  //   value: "unlock",
  //   type: "success",
  //   icon: "el-icon-unlock"
  // },
  // {
  //   name: "禁用",
  //   value: "lock",
  //   type: "info",
  //   icon: "el-icon-lock"
  // },
];
const ACTION_NAME = {
  THE_OPT_ADD_EDIT_DEL: ['添加', '修改', '删除'],
  SCHEME_SELF: ['添加', '修改', '删除', '查看详情', '执行方案'],
  SCHEME_TEMP: ['添加', '修改', '删除', '查看详情'],
  TIMER_TASK: ['添加', '修改', '删除', '开始', '停止'],
  RULE_TYPE_MANAGE: ['添加规则', '修改', '删除', '克隆'],
  QUALITY_INSPECTION_ANALYSIS: ['查看详情', '查看报告', '执行日志']
};
function getOperateInfo(type) {
  let result = [];
  const names = ACTION_NAME[type];
  names.forEach((name) => {
    OPERATE_ARRS.forEach((val) => {
      if (val.name === name) {
        result.push(val);
      }
    });
  });
  return result;
}
export { getOperateInfo };

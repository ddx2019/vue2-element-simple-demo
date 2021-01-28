// 在functionManage.vue组件中，批量添加路由数据; 注意：左侧的菜单栏中，一级菜单是父级，以一级菜单的id为parentId,添加它下面的路由

// 系统管理模块：

// 1. 系统配置, parentId为 2009037W0WKYMRP0
const SYSTEM_CONFIG = [
  {
    path: 'tree',

    name: 'pub_tree',

    component: 'system/config/pubTree',

    meta: { title: '公共树管理', belong: 'system' }
  },

  {
    path: 'param',

    name: 'system_param',

    component: 'system/config/sysParam',

    meta: { title: '系统参数', belong: 'system' }
  },
  {
    path: 'dictionary',

    name: 'system_dictionary',

    component: 'system/config/sysDictionary',

    meta: { title: '系统字典', belong: 'system' }
  },

  {
    path: 'rules',

    name: 'number_rules',

    component: 'system/config/numRules',

    meta: { title: '单据号规则', belong: 'system' }
  },

  {
    path: 'annex',

    name: 'annex_config',
    component: 'system/config/annexConfig',

    meta: { title: '附件配置', belong: 'system' }
  },

  {
    path: 'task',

    name: 'timer_task',

    component: 'system/config/timerTask',

    meta: { title: '定时器任务配置', belong: 'system' }
  }
];

// 2. 组织权限， parentId为200907AZ6WKMT9P0
const PERMS = [
  {
    path: 'attr',

    name: 'attribute_definition',

    component: 'system/organization/attributeDefinition',

    meta: { title: '组织机构属性定义', belong: 'system' }
  },

  {
    path: 'organization',

    name: 'organization_manage',

    component: 'system/organization/orgManage',

    meta: { title: '组织管理', belong: 'system' }
  },

  {
    path: 'function_mange',

    name: 'function_mange',

    component: 'system/organization/functionManage',

    meta: { title: '功能管理', belong: 'system' }
  },

  {
    path: 'role',

    name: 'role_manage',

    component: 'system/organization/roleManage',

    meta: { title: '角色管理', belong: 'system' }
  },

  {
    path: 'org_authorize',

    name: 'org_authorize',

    component: 'system/organization/orgAuthorize', // authorizeManage.vue ====>授权管理 改为了组织授权

    meta: { title: '组织授权', belong: 'system' }
  },

  //去掉了
  // {

  //   path: "/permission",

  //   name: "permission_manage",

  //   component:

  //     ("system/organization/permissionManage",

  //   meta: { title: "权限管理", belong: "system" }

  // },

  //  {
  //   path: "professional",

  //   name: "professional_limits",

  //   component: "system/organization/professionalLimits",

  //   meta: { title: "业务权限", belong: "system" }
  // },

  {
    path: 'professional_allot',

    name: 'professional_limits_allot',

    component: 'system/organization/professionalLimitsAllot',

    meta: { title: '业务权限分配', belong: 'system' }
  },

  {
    path: 'group',

    name: 'group_manage',

    component: 'system/organization/groupManage',

    meta: { title: '分组管理', belong: 'system' }
  }
];

// 3. 系统日志， parentId为200907B3ADN6BCM8
const LOG = [
  {
    path: 'login_log',

    name: 'login_log',

    component: 'system/log/loginLog',

    meta: { title: '登录日志', belong: 'system' }
  },

  {
    path: 'admin_log',

    name: 'admin_log',

    component: 'system/log/adminLog',

    meta: { title: '管理员日志', belong: 'system' }
  },

  {
    path: 'error_log',

    name: 'error_log',

    component: 'system/log/errorLog',

    meta: { title: '错误日志', belong: 'system' }
  },

  {
    path: 'system_log',

    name: 'system_log',

    component: 'system/log/systemLog',

    meta: { title: '系统日志', belong: 'system' }
  },

  {
    path: 'authorize_log',

    name: 'authorize_log',

    component: 'system/log/authorizeLog',

    meta: { title: '授权日志', belong: 'system' }
  },

  {
    path: 'audit_log',

    name: 'audit_log',

    component: 'system/log/auditLog',

    meta: { title: '审计日志', belong: 'system' }
  },

  {
    path: 'visitor',

    name: 'online_visitor',

    component: 'system/log/onlineVisitor',

    meta: { title: '在线访问人员', belong: 'system' }
  }
];

// 4. 安全策略  parentId为 200907B50NWFYFFW
const APP_SYS = [
  {
    path: 'access_equip',

    name: 'access_equipment',

    component: 'system/safety/accessEquipment',

    meta: { title: '访问设备', belong: 'system' }
  },

  {
    path: 'access_limits',

    name: 'access_limits',

    component: 'system/safety/accessLimits',

    meta: { title: '访问限制', belong: 'system' }
  },

  {
    path: 'pwd_security',

    name: 'pwd_security',

    component: 'system/safety/pwdSecurity',

    meta: { title: '密码安全策略', belong: 'system' }
  },

  {
    path: 'account_limits',

    name: 'account_limits',

    component: 'system/safety/accountLimits',

    meta: { title: '账号限制', belong: 'system' }
  }
];

// 5. 消息中心   parentId为 200907B7R6198FNC
const INFO = [
  {
    path: 'msg_template',

    name: 'msg_template',

    component: 'system/inform/msgTemplate',

    meta: { title: '模板管理', belong: 'system' }
  },

  {
    path: 'msg_manage',

    name: 'msg_manage',

    component: 'system/inform/msgManage',

    meta: { title: '消息管理', belong: 'system' }
  },

  {
    path: 'my_msg',

    name: 'my_msg',

    component: 'system/inform/myMsg',

    meta: { title: '我的消息', belong: 'system' }
  }
];

// 建模平台模块：
// 1. 开发辅助 parentId为 2009037Z07GBRMA8
const DEV_AIDER = [
  {
    path: 'source',

    name: 'data_source',

    component: 'model/devAider/dataSource',

    meta: { title: '数据源', belong: 'model' }
  },
  {
    path: 'value_fun',

    name: 'value_fun',

    component: 'model/devAider/valueFun',

    meta: { title: '取值函数', belong: 'model' }
  },
  {
    path: 'dict_dimension',

    name: 'dict_dimension',

    component: 'model/devAider/dictDimension',

    meta: { title: '字典维度', belong: 'model' }
  },
  {
    path: 'valid_check',

    name: 'valid_check',

    component: 'model/devAider/validCheck',

    meta: { title: '有效校验', belong: 'model' }
  },
  {
    path: 'btn_manage',

    name: 'btn_manage',

    component: 'model/devAider/BtnManage',

    meta: { title: '按钮管理', belong: 'model' }
  }
];

// 2. 编码规则  parentId 为 200907BXZZXR2HSW
const DECODE_RULES_NEW = [
  {
    path: 'cover_func',

    name: 'cover_func',

    component: 'model/codeRules/converFunc',

    meta: { title: '转换函数', belong: 'model' }
  },

  {
    path: 'rule_config',

    name: 'rule_config',

    component: 'model/codeRules/ruleConfig',

    meta: { title: '规则配置', belong: 'model' }
  }
];

// 3. 业务构建 parentId为 200907BS6667BB0H
const TASK_BUILDING = [
  {
    path: 'entity_template',

    name: 'entity_template',

    component: 'model/taskBuilding/entityTemplate',

    meta: { title: '实体模板', belong: 'model' }
  },

  {
    path: 'task_entity',

    name: 'task_entity',

    component: 'model/taskBuilding/taskEntity',

    meta: { title: '业务实体', belong: 'model' }
  },
  {
    path: 'task_obj',

    name: 'task_obj',

    component: 'model/taskBuilding/taskObj',

    meta: { title: '业务对象', belong: 'model' }
  }
];

// 4. 设计器  parentId 为 200915B2Z205K30H
const PROJECT_DESIGNER = [
  {
    path: 'form_designer',

    name: 'form_designer',

    component: 'model/designer/formDesigner',

    meta: { title: '表单设计', belong: 'model' }
  },

  {
    path: 'list_designer',

    name: 'list_designer',

    component: 'model/designer/listDesigner',

    meta: { title: '列表设计', belong: 'model' }
  },
  {
    path: 'form_designer',

    name: 'design_form',

    component: 'model/designer/module/designForm',

    meta: { title: '设计表单', belong: 'model' }
  },

  {
    path: 'list_designer',

    name: 'design_list',

    component: 'model/designer/module/designList',

    meta: { title: '设计列表', belong: 'model' }
  }
];

export let CURR_ROUTES = PROJECT_DESIGNER;

// tip: 在 functionManage.vue中有一个添加接口，调它添加路由数据,在该组件中定义 addRoutesTodb  该方法可实现分类的 批量添加，更改该方法的parentId即可

/*
router的结构如下：

  {
    path: "/workbench",

    component: () => import("../views/layout.vue"),

    redirect: "/workbench/system/system_config",

    children: [
      {
        path: "system",

        meta: { title: "系统管理" },

        component: () => import("../views/layout.vue"),
        children: [
          {
            path: "system_config",

            meta: { title: "系统配置" },

            component: () => import("../views/Home.vue"),

            children: [
              {
                path: "tree",

                name: "pub_tree",

                component: () => import("../views/system/config/pubTree.vue"),

                meta: { title: "公共树管理", belong: "system" }
              },

              {
                path: "param",

                name: "system_param",

                component: () => import("../views/system/config/sysParam.vue"),

                meta: { title: "系统参数", belong: "system" }
              }
            ]
          }
        ]
      }
*/

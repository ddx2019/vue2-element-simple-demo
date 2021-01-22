export const QUESTION_LEVEL_LIST = [
  {
    name: "一般",
    value: 1
  },
  {
    name: "重要",
    value: 2
  },
  {
    name: "严重",
    value: 3
  }
];

export const REGEX_TYPE_DATAT = [
  {
    name: "日期格式1",
    regExpress:
      "^[12]\\d{3}-((1[012])|(0[1-9])|([1-9]))-((0[1-9])|([1-9])|([12]\\d)|(3[01]))$",
    desc: "规定输入形如“2014-08-08”的日期格式,也可为“2014-8-8”"
  },
  {
    name: "日期格式2",
    regExpress:
      "^[12]\\d{3}年((1[012])|([1-9]))月(([1-9])|([12]\\d)|(3[01]))日$",
    desc: "规定输入的日期格式，形如:2014年8月28日"
  },
  {
    name: "整数",
    regExpress: "^-?(0|[1-9][\\d]*)$",
    desc: "整数格式的字符串,如6，-6"
  },
  {
    name: "浮点数",
    regExpress: "^-?(0|[1-9][\\d]*)(.[\\d]+|[\\d]*)$",
    desc: "浮点数格式的字符串,如42,36.5,-24.6"
  },
  {
    name: "纯中文",
    regExpress: "^[\\u4e00-\\u9fa5]+$", // 注意该规则需要转义一下才能正常显示
    desc: "只能出现中文"
  },
  {
    name: "纯英文",
    regExpress: "^[a-zA-Z]+$",
    desc: "只能出现a~z，A~Z，26个英文字母的大小写组合"
  },
  {
    name: "非负整数",
    regExpress: "^(0|[1-9][\\d]*)$",
    desc: "非负整数格式的字符串，如42"
  },
  {
    name: "非负浮点数",
    regExpress: "^(0|[1-9][\\d]*)(.[\\d]+|[\\d]*)$",
    desc: "非负浮点数格式的字符串,如42,78.1"
  }
];

// + - * / () > <  >= <=  <>不等于
export const SIGN_NAMES = [
  {
    name: "JiaHao",
    title: "加",
    value: "+"
  },
  {
    name: "JianHao",
    title: "减",
    value: "-"
  },
  {
    name: "ChengHao",
    title: "乘",
    value: "*"
  },
  {
    name: "ChuHao",
    title: "除",
    value: "/"
  },
  {
    name: "DaYuHao",
    title: "大于",
    value: ">"
  },
  {
    name: "XiaoYuHao",
    title: "小于",
    value: "<"
  },
  {
    name: "DaYuDengYu",
    title: "大于等于",
    value: ">="
  },
  {
    name: "XiaoYuDengYu",
    title: "小于等于",
    value: "<="
  },
  {
    name: "BuDengYu",
    title: "不等于",
    value: "<>"
  },
  {
    name: "ZuoKuoHao",
    title: "左括号",
    value: "("
  },
  {
    name: "YouKuoHao",
    title: "右括号",
    value: ")"
  }
];

// 标准表的表名，选中它的时候，添加和修改规则的界面需要 显示数据类型
export const STANDARD_TABLE_NAME = "T_STANDARD_PARAM_241";

<template>
  <div class="base-table">
    <div class="comn_layout">
      <div class="_left">
        <p class="comn_title">
          类别
        </p>
        <comn-tree
          ref="comnTree"
          :treeList="treeList"
          :nodeKey="nodeKey"
          :contextMenu="contextMenu"
          :rightFlag="rightFlag"
          :expandedKeys="expandedKeys"
          :defaultProps="defaultProps"
          @handleNodeClick="handleNodeClick"
          @handleRightClick="handleRightClick"
          @handleClickTreeMenu="handleClickTreeMenu"
          @updateTreeMenu="updateTreeMenu"
        ></comn-tree>
      </div>
      <div class="_right">
        <p class="comn_title">
          详细信息
        </p>
        <p>这是内容列表</p>
      </div>
    </div>
    <comn-dialog
      :dialogTitle="popupTitle"
      :centerDialogVisible="centerDialogVisible"
      @resetPopupData="resetPopupData"
      @submitPopupData="submitPopupData"
      @updateVisible="updateVisible"
    >
      <template v-if="filterAddUpdate(popupTitle)">
        <el-form
          :model="formInPopup"
          ref="FromInPopup"
          :rules="rules"
          :inline="true"
          label-width="115px"
        >
          <el-form-item label="名称：" prop="label">
            <el-input type="text" v-model="formInPopup.label"></el-input>
          </el-form-item>
          <el-form-item label="描述：" prop="desc">
            <el-input type="text" v-model="formInPopup.desc"></el-input>
          </el-form-item>
        </el-form>
      </template>
      <template v-else>
        <p class="enable_font">
          <i class="el-icon-info"></i>
          <span
            >确定要
            <em class="operate_font">{{ popupTitle }}</em>
            吗？</span
          >
        </p>
      </template>
    </comn-dialog>
  </div>
</template>

<script>
/* 关于树形菜单 treeList, 注意 注意数据格式：
       1. 如果后台给的是以parentId和id关联的扁平数组 ，则可调用utils文件夹下的formTheTree.js 中的formTreeByParentId方法将其拼接成树形菜单，
       2. 若后台给的是树形菜单，在需要用到扁平数组的时候，则可 调用 treeConvertToArr.js的方法，将树形菜单转换为组员的数据。
        扁平数组，如下：
*/
/*
import { formTreeByParentId } from '../../utils/formTheTree.js';
import { treeConvertToArr } from '../../utils/treeConvertToArr.js';
let data = [
  {
    id: 1,
    name: '一级 1',
    parentId: 0
  },
  {
    id: 4,
    name: '二级 1-1',
    parentId: 1
  },
  {
    id: 9,
    name: '三级 1-1-1',
    parentId: 4
  },
  {
    id: 10,
    name: '三级 1-1-2',
    parentId: 4
  }
];
let result = formTreeByParentId(data, 0); // 参数1是数组，参数2是顶层id,这条数据的顶层id为0
console.log(result, 'result');
// 此时调 treeConvertToArr：可将result变为原来的data:
let arrs = treeConvertToArr(result);
console.log('arrs:', arrs);
*/
export default {
  inject: ['reload'],
  data() {
    return {
      centerDialogVisible: false,
      popupTitle: '',

      expandedKeys: [], // 默认展开的树形菜单列表
      rightFlag: false,
      treeList: [
        // 等价于上面的result;
        {
          menuId: 1,
          label: '一级 1',
          parentId: 0,
          children: [
            {
              menuId: 4,
              label: '二级 1-1',
              parentId: 1,
              children: [
                {
                  menuId: 9,
                  label: '三级 1-1-1',
                  parentId: 4
                },
                {
                  menuId: 10,
                  label: '三级 1-1-2',
                  parentId: 4
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'name' // 这个label的值和treeList中的字段label要对应
      },
      nodeKey: 'menuId',
      contextMenu: [],
      formInPopup: {
        label: '', // 名称
        desc: '' // 描述
      },
      rules: {
        label: [{ required: true, message: '请输入名称', trigger: 'blur' }]
      },
      tableInfo: {
        // 按用户自定义分组 请求规则
        pageNum: 1,
        pageSize: 10,
        menuId: '1328584694' // 分组id ，默认显示规则分组下的规则
      },
      treeMenuItem: {}
    };
  },
  watch: {
    treeMenuItem(newVal, old) {
      // console.log(newVal, 'newval');
      // 右键菜单的内容随右键单击的树变化
      if (newVal.parentId === 0) {
        this.contextMenu = [
          {
            name: '添加分组',
            value: 'addGroup'
          }
        ];
      } else {
        this.contextMenu = [
          {
            name: '添加分组',
            value: 'addGroup'
          },
          {
            name: '编辑分组',
            value: 'editGroup'
          },
          {
            name: '删除',
            value: 'delGroup'
          }
        ];
      }
    }
  },
  methods: {
    updateVisible(val) {
      this.centerDialogVisible = false;
    },
    updateTreeMenu(val) {
      this.rightFlag = val;
    },
    handleNodeClick(data) {
      this.$set(this.tableInfo, 'menuId', data.menuId);
      // this.getTableData(this.tableInfo); // 获取右侧表格信息
    },
    handleRightClick(obj) {
      console.log('obj', obj);
      this.rightFlag = true;
      this.treeMenuItem = obj;
    },
    handleClickTreeMenu(name) {
      this.popupTitle = name;
      this.centerDialogVisible = true;
      if (name === '添加分组') {
        this.formInPopup = {};
      }
      if (name === '编辑分组') {
        this.$set(this.formInPopup, 'name', this.treeMenuItem.label);
        this.$set(this.formInPopup, 'desc', this.treeMenuItem.desc);
      } else if (name === '删除') {
        this.popupTitle = '删除分组';
      }
      this.rightFlag = false;
    },
    cancelFormValidate(formName) {
      if (this.$refs[formName]) {
        this.$refs[formName].clearValidate();
      }
    },

    resetPopupData() {
      this.formInPopup = {};
      this.centerDialogVisible = false;
      this.cancelFormValidate('FromInPopup');
    },
    submitPopupData() {
      let name = this.popupTitle;
      if (name === '删除分组') {
        this.getDelGroup(this.treeMenuItem.menuId);
        return;
      }
      this.$refs.FromInPopup.validate((valid) => {
        if (!valid) return false;
        let info = {
          label: this.formInPopup.name,
          desc: this.formInPopup.desc
        };
        //  添加或修改
        if (name === '添加分组') {
          (info['parentId'] = this.treeMenuItem.menuId), // 当前的menuId作为parentId
            this.getAddGroup(info);
        } else if (name === '编辑分组') {
          info['menuId'] = this.treeMenuItem.menuId; // 自己的id
          this.getEditGroup(info);
        }
      });
    },
    async getGroupTree() {
      // await groupTree()
      //   .then((res) => {
      //     if (res.data.code === 0) {
      //       this.treeList = res.data.result;
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    getAddGroup(info) {
      this.$message.success('添加成功');
      // this.handleRefreshTree(res.data.result.menuId);
      this.reload();
    },
    getEditGroup(info) {
      this.$message.success('修改成功');
      // this.handleRefreshTree(res.data.result.menuId);
      this.reload();
    },
    getDelGroup() {
      this.$message.success('删除成功');
      this.reload();
    },
    handleRefreshTree(id) {
      // 添加、修改成功,展开tree，刷新树形菜单，并选中当前编辑过的树节点
      // this.getGroupTree().then(() => {
      //   this.expandedKeys = [id];
      //   this.$refs.comnTree.setCurrTreeNode(id); // 主动获取子组件选中树节点的方法
      // });
    }
  }
};
</script>
<style lang="scss"></style>

<template>
  <div class="tree-container">
    <!-- 点击node节点,才加载子节点的时候，需设置 :lazy="true" -->

    <el-tree
      class="_tree"
      :data="treeList"
      :props="defaultProps"
      @node-expand="handleNodeExpand"
      @node-click="handleNodeClick"
      @node-contextmenu="handleRightClick"
      :default-expanded-keys="expandedKeys"
      :node-key="nodeKey"
      :highlight-current="true"
      ref="comnTree"
      :style="
        `max-height:${treeHeight}px;max-width:${treeWidth}px;overflow-x:auto;}`
      "
    >
      <span slot-scope="{ node, data }">
        <i :class="data.icon ? data.icon : 'el-icon-folder-opened'"></i>
        <span class="tree_label">{{ node.label }}</span>
        <span
          class="tree_label"
          v-if="data.total || data.total === 0"
          title="数量"
          >({{ data.total }})</span
        >
      </span>
    </el-tree>

    <el-popover
      placement="right"
      width="150"
      trigger="manual"
      v-model="Flag"
      class="popover-intree"
      id="contextMenu"
      :style="`left:${clientX}px;top:${clientY}PX`"
    >
      <ul>
        <li
          v-for="item in contextMenu"
          :key="item.id"
          class="context-menu"
          @click="handleClickMenu(item.name)"
        >
          {{ item.name }}
        </li>
      </ul>
    </el-popover>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clientX: '',
      clientY: ''
    };
  },
  props: {
    treeList: {
      // 包含了nodeKey和defaultProps的所有内容[{name:'dsdd',id:1,children:[{id:2,name:'dekse'}]}]
      type: Array
    },
    defaultProps: {
      type: Object,
      default() {
        return {
          children: 'children',
          label: 'name' // 这个label的值，在treeList中必须有对应的属性名才能显示出来
          // isLeaf: "leaf" //需要加叶子节点的页面
        };
      }
    },
    nodeKey: {
      // 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
      type: String,
      default() {
        return 'id';
      }
    },
    contextMenu: {
      type: Array,
      default() {
        let menu = [
          {
            name: '添加',
            value: 'add'
          },
          {
            name: '修改',
            value: 'edit'
          },
          {
            name: '删除',
            value: 'del'
          }
        ]; //树的右键菜单
        return menu;
      }
    },
    rightFlag: {
      type: Boolean,
      default() {
        return false;
      }
    },
    treeHeight: {
      type: Number,
      default() {
        return this.$getViewHeight() - 200;
      }
    },
    treeWidth: {
      type: Number,
      default() {
        return 237;
      }
    },
    expandedKeys: {
      // 默认展开的树节点，ids
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    Flag: {
      get() {
        return this.rightFlag;
      },
      set(val) {
        this.$emit('updateTreeMenu', val);
      }
    }
  },
  mounted() {
    // 监听，除了点击自己，点击其他地方将自身隐藏
    window.addEventListener('click', this.handleClickDoc);
  },
  methods: {
    handleNodeClick(data) {
      this.$emit('updateTreeMenu', false); // 点击树节点的时候，将右键菜单隐藏。
      this.$emit('handleNodeClick', data);
    },
    handleRightClick(event, obj, node, self) {
      //  确定 右键菜单出现的位置
      this.clientX = event.offsetX;
      this.clientY = event.clientY - 160;
      this.setCurrTreeNode(obj[this.nodeKey]);
      this.$emit('handleRightClick', obj);
    },
    handleClickMenu(name) {
      this.$emit('handleClickTreeMenu', name);
    },
    handleNodeExpand(data, node, self) {
      this.$emit('handleNodeExpand', data);
    },
    // 选中树节点的方法，修改的时候，id未变，子组件监听不到父组件传入的id变化，故采取了父组件主动获取子组件的方法
    setCurrTreeNode(id) {
      console.log(id, 'dede');
      this.$refs['comnTree'].setCurrentKey(id);
    },
    handleClickDoc(e) {
      const contextMenu = document.getElementById('contextMenu');
      if (contextMenu) {
        if (!contextMenu.contains(e.target)) {
          this.$emit('updateTreeMenu', false);
        }
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('click', this.handleClickDoc);
  }
};
</script>
<style lang="scss">
.tree-container {
  position: relative;

  ._tree {
    color: #444;
    padding-left: 6px;
    overflow: auto;
    //更改tree的默认图标颜色，图标是否为叶子节点都会出现
    // span {
    //   color: $icon_color;
    // }
    // .is-leaf {
    //   color: transparent;
    // }
    .tree_label {
      font-size: 14px;
      letter-spacing: 1px;
      margin-left: 5px;
    }
  }

  .popover-intree {
    position: absolute;
    ul {
      padding: 3px;
    }
    li {
      list-style: none;
    }
  }
  .context-menu {
    letter-spacing: 1px;
    color: #222;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    color: #000;
    text-align: center;
    &:hover {
      border-radius: 2px;
      background: $active_color;
      color: #fff;
    }
  }
  .el-popover {
    padding: 2px;
    min-width: 20px;
    border: 1px solid $border_color;
    border-radius: 0;
    box-shadow: 4px 4px 4px -4px rgb(121, 118, 118);
  }
  //重写tree的 active样式
  .el-tree--highlight-current
    .el-tree-node.is-current
    > .el-tree-node__content {
    background: $active_color;
    color: #fff;
  }
  //重写tree样式，才可使横向 超出显示滚动条
  .el-tree > .el-tree-node {
    min-width: 100%;
    display: inline-block;
  }
}
</style>

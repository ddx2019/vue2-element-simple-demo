<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      text-color="#444"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                  >{{ threeItem.title }}</el-menu-item
                >
              </el-submenu>
              <el-menu-item
                v-else
                :index="subItem.index"
                :key="subItem.index"
                >{{ subItem.title }}</el-menu-item
              >
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item
            :index="item.index"
            :key="item.index"
            :disabled="item.disabled"
          >
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'el-icon-s-home',
          index: 'dashboard',
          title: '系统首页'
        },
        {
          icon: 'el-icon-s-grid',
          index: 'table',
          title: '基础表格'
        },
        {
          icon: 'el-icon-notebook-2',
          index: 'markdown',
          title: 'markdown编辑器'
        },
        {
          icon: 'el-icon-document',
          index: 'pdf',
          title: '预览PDF'
        },
        {
          icon: 'el-icon-video-camera',
          index: 'videojs',
          title: 'videojs播放视频'
        },
        {
          icon: 'el-icon-bangzhu',
          index: 'task',
          title: '定时任务',
          subs: [
            {
              icon: 'el-icon-bangzhu',
              index: 'task',
              title: '任务管理'
            }
          ]
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '');
    },
    collapse() {
      return this.$store.state.layout.sdCollapse;
    }
  },
  mounted() {
    this.$store.commit('SET_SD_COLLAPSE', this.collapse);
  }
};
</script>

<style lang="scss">
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: auto;
  .sidebar::-webkit-scrollbar {
    width: 0;
  }
  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 200px;
  }
  .sidebar > ul {
    height: 100%;
  }

  // 重写menu样式
  .el-menu-item,
  .el-submenu__title {
    height: 40px;
    line-height: 40px;
    width: 200px;
  }
  .el-submenu .el-menu-item {
    height: 40px;
    line-height: 40px;
  }
  .el-menu-item.is-active {
    background: #e6f7ff;
    border-right: 3px solid $header_bg;
    width: 200px;
    color: $header_bg;
  }
  .el-menu {
    border-right: none;
  }
  .menu_icon {
    font-size: 18px;
    font-weight: 600;
    margin-right: 5px;
    margin-top: -6px;
    display: inline-block;
  }
}
</style>

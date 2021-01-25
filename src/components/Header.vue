<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <el-tooltip
      class="item"
      effect="light"
      :content="!collapse ? '收起侧边栏' : '展开侧边栏'"
      placement="right-start"
    >
      <div class="collapse-btn" @click="collapseChange">
        <i v-if="!collapse" class="el-icon-s-fold"></i>
        <i v-else class="el-icon-s-unfold"></i>
      </div>
    </el-tooltip>

    <div class="logo">
      <img src="../assets/img/D.png" alt="logo" />
      <span class="fontFamily-18">简易平台</span>
    </div>
    <!--
      <div class="fontFamily-14 top-bar">
      <span>数据显示</span>
      <span>数据显示</span>
      <span>数据显示</span>
      <span>数据显示</span>
      <span>数据显示</span>
      <span>数据显示</span>
    </div> -->
    <div class="header-right">
      <div class="header-user-con">
        <!-- 全屏显示 -->
        <div class="btn-fullscreen" @click="handleFullScreen">
          <el-tooltip
            effect="dark"
            :content="fullscreen ? `取消全屏` : `全屏`"
            placement="bottom"
          >
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <!-- 消息中心 -->
        <div class="btn-bell">
          <el-tooltip
            effect="dark"
            :content="message ? `有${message}条未读消息` : `消息中心`"
            placement="bottom"
          >
            <router-link to="/tabs">
              <i class="el-icon-bell"></i>
            </router-link>
          </el-tooltip>
          <span class="btn-bell-badge" v-if="message"></span>
        </div>
        <!-- 用户头像 -->
        <div class="user-avator">
          <img src="../assets/img/img.jpg" />
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ username }}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <a
              href="https://github.com/ddx2019/vue2-element-simple-demo"
              target="_blank"
            >
              <el-dropdown-item>项目仓库</el-dropdown-item>
            </a>
            <el-dropdown-item divided command="loginout">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapse: false,
      fullscreen: false,
      name: 'ddx',
      message: 2
    };
  },
  computed: {
    username() {
      let username = localStorage.getItem('ms_username');
      return username ? username : this.name;
    }
  },
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if (command == 'loginout') {
        localStorage.removeItem('ms_username');
        this.$router.push('/login');
      }
    },
    // 侧边栏折叠
    collapseChange() {
      this.collapse = !this.collapse;
      this.$store.commit('SET_SD_COLLAPSE', this.collapse);
    },
    // 全屏事件
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    }
  },
  mounted() {
    if (document.body.clientWidth < 1500) {
      this.collapseChange();
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  font-size: 22px;
  color: #fff;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 60px;
}
.header .logo {
  float: left;
  line-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo img {
  height: 35px;
  margin-right: 10px;
  // margin-left: 20px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 60px;
  align-items: center;
}
.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}
.btn-bell .el-icon-bell {
  color: #fff;
}
.user-name {
  margin-left: 10px;
}
.user-avator {
  margin-left: 20px;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
.el-dropdown-menu__item {
  text-align: center;
}
.fontFamily-18 {
  font-weight: bold;
  font-size: 18px;
}
// .fontFamily-14 {
//   font-size: 14px;
// }
// .top-bar {
//   position: absolute;
//   left: 30%;
//   line-height: 60px;
//   border: 1px solid red;
//   span {
//     display: inline-block;
//     margin-right: 20px;
//     &:last-of-type {
//       margin-right: 0;
//     }
//   }
// }
</style>

<template>
  <div class="tags" v-if="showTags">
    <ul>
      <li
        class="tags-li"
        v-for="(item, index) in currTagLists"
        :class="{ active: isActive(item.path) }"
        :key="index"
      >
        <router-link :to="item.path" class="tags-li-title">
          {{ item.title }}
        </router-link>
        <span class="tags-li-icon" @click="closeTags(index)"
          ><i class="el-icon-close"></i
        ></span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button size="mini" type="primary">
          标签选项<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu size="small" slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showTags() {
      return this.currTagLists.length > 0;
    },
    currTagLists() {
      return this.$store.state.layout.tagsList;
    }
  },
  watch: {
    $route(newValue) {
      this.setTags(newValue);
    }
  },
  mounted() {
    this.setTags(this.$route);
  },
  methods: {
    isActive(path) {
      return path === this.$route.fullPath;
    },
    // 关闭单个标签
    closeTags(index) {
      const delItem = this.currTagLists.splice(index, 1)[0];
      const item = this.currTagLists[index]
        ? this.currTagLists[index]
        : this.currTagLists[index - 1];
      if (item) {
        delItem.path === this.$route.fullPath && this.$router.push(item.path);
      } else {
        this.$router.push('/');
      }
      this.$store.commit('SET_TAG_LIST', this.currTagLists);
    },
    // 关闭全部标签
    closeAll() {
      this.$store.commit('SET_TAG_LIST', []);
      this.$router.push('/');
    },
    // 关闭其他标签
    closeOther() {
      const curItem = this.currTagLists.filter((item) => {
        return item.path === this.$route.fullPath;
      });
      this.$store.commit('SET_TAG_LIST', curItem);
    },
    // 设置标签
    setTags(route) {
      const isExist = this.currTagLists.some((item) => {
        return item.path === route.fullPath;
      });
      if (!isExist) {
        if (this.currTagLists.length >= 8) {
          this.currTagLists.shift();
        }
        this.currTagLists.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.name
        });
      }
      this.$store.commit('SET_TAG_LIST', this.currTagLists);
    },
    handleTags(command) {
      command === 'other' ? this.closeOther() : this.closeAll();
    },
    // 监听关闭当前页面的标签页
    closeCurrentTags() {
      for (let i = 0, len = this.currTagLists.length; i < len; i++) {
        const item = this.currTagLists[i];
        if (item.path === this.$route.fullPath) {
          if (i < len - 1) {
            this.$router.push(this.currTagLists[i + 1].path);
          } else if (i > 0) {
            this.$router.push(this.currTagLists[i - 1].path);
          } else {
            this.$router.push('/');
          }
          this.currTagLists.splice(i, 1);
          this.$store.commit('SET_TAG_LIST', this.currTagLists);
          break;
        }
      }
    }
  }
};
</script>

<style scoped>
.tags {
  position: relative;
  height: 30px;
  overflow: hidden;
  background: #fff;
  padding-right: 120px;
  box-shadow: 0 5px 10px #ddd;
}

.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.tags-li {
  float: left;
  margin: 3px 5px 2px 3px;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 23px;
  line-height: 23px;
  border: 1px solid #e9eaec;
  background: #fff;
  padding: 0 5px 0 12px;
  vertical-align: middle;
  color: #666;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

.tags-li:not(.active):hover {
  background: #f8f8f8;
}

.tags-li.active {
  color: #fff;
}

.tags-li-title {
  float: left;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;
  color: #666;
}

.tags-li.active .tags-li-title {
  color: #fff;
}

.tags-close-box {
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  width: 110px;
  height: 30px;
  background: #fff;
  box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>

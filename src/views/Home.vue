<template>
  <div class="wrapper">
    <nav-header></nav-header>
    <nav-sidebar></nav-sidebar>
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <v-tags></v-tags>
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive :include="activeTags">
            <router-view />
          </keep-alive>
        </transition>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import { NavHeader, NavSidebar, NavFooter, vTags } from '@/components';
export default {
  name: 'Home',
  components: {
    NavHeader,
    NavSidebar,
    NavFooter,
    vTags
  },
  data() {
    return {
      activeTags: []
    };
  },
  computed: {
    collapse() {
      return this.$store.state.layout.sdCollapse;
    },
    tagsList() {
      return this.$store.state.layout.tagsList;
    }
  },

  mounted() {
    this.$store.commit('SET_SD_COLLAPSE', this.collapse);
    this.handleActiveTags();
  },
  methods: {
    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    handleActiveTags() {
      let arr = [];
      for (let i = 0, len = this.tagsList.length; i < len; i++) {
        this.tagsList[i].name && arr.push(this.tagsList[i].name);
      }
      this.activeTags = arr;
    },
    handleUpdateTags(name) {
      let index = this.tagsList.findIndex((ele) => ele.name === name);
      if (index !== -1) {
        this.tagsList.splice(index, 1);
        this.$store.commit('SET_TAG_LIST', this.tagsList);
      }
    }
  },
  watch: {
    $route: {
      handler(to, from) {
        // 添加规则和各规则以及质检报告，离开这些页面之后，它的tag都需关闭
        let arrs = [
          'addRules',
          'nullCheck',
          'rangeCheck',
          'normCheck',
          'logicCheck',
          'repeatCheck',
          'timelinessCheck',
          'missingCheck',
          'quoteCheck',
          'outliersCheck',
          'fluctuationCheck',
          'balanceCheck',
          'sqlCheck',
          'project'
        ];
        if (arrs.includes(from.name)) {
          this.handleUpdateTags(from.name);
        }
      },
      // 深度观察监听
      deep: true
    }
  }
};
</script>

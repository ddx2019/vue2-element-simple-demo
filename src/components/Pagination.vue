<template>
  <div
    :class="{
      hidden: hidden
    }"
    class="pagination-container"
  >
    <span
      class="refresh_icon el-icon-refresh"
      title="刷新"
      @click="handleRefreshTable"
    ></span>
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-sizes="pageSizes"
      :page-size.sync="pageSize"
      :layout="layout"
      :total="total"
      :pager-count="pagerCount"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  props: {
    hidden: {
      type: Boolean,
      default: false
    },
    total: {
      required: true,
      type: Number
    },
    page: {
      //当前页
      type: Number,
      default: 1
    },
    limit: {
      // 限制 每页多少条数据
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50];
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    },
    pagerCount: {
      type: Number,
      default: 7
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.page;
      },
      set(val) {}
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(val) {}
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val);
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val);
    },
    handleRefreshTable() {
      this.$emit('handleRefreshTable', {
        current: this.currentPage,
        pageSize: this.pageSize
      });
    }
  }
};
</script>
<style lang="scss">
.pagination-container {
  background: #f1f1f1;
  display: flex;
  width: 100%;
  .refresh_icon {
    width: 32px;
    color: $header_bg;
    margin: 8px 0 0 15px;
    cursor: pointer;
    font-weight: 600;
    font-size: 18px;
  }
}
.hidden {
  display: none;
}
</style>

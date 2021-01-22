<template>
  <div class="operate-btn">
    <el-button
      v-for="btn in operateBtns"
      :key="btn.value"
      @click="handleClickBtn(btn)"
      :type="btn.type"
      :icon="btn.icon"
      >{{ btn.name }}
    </el-button>
  </div>
</template>
<script>
export default {
  props: {
    btns: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      btnsType: ['success', 'info', 'warning', 'danger', '']
    };
  },
  mounted() {
    this.handleBtnsType();
  },
  computed: {
    operateBtns() {
      return this.btns;
    }
  },
  methods: {
    handleClickBtn(val) {
      this.$emit('handleClickBtn', val);
    },
    handleBtnsType() {
      // btn 随机type
      let result = this.btns;
      result.forEach((val) => {
        if (!val.type) {
          let tagIndex = Math.floor(Math.random() * 5);
          let type = this.btnsType[tagIndex];
          val['type'] = type;
        }
      });
      return result;
    }
  }
};
</script>
<style lang="scss" scoped>
.operate-btn {
  display: inline-block;
  margin-right: 10px;
}
</style>

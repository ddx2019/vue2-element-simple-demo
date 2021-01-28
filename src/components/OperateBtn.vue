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
  computed: {
    operateBtns() {
      return this.btns;
    }
  },
  watch: {
    btns: {
      handler(newVal, old) {
        this.handleBtnsType();
      }
    },
    deep: true
  },
  methods: {
    handleClickBtn(val) {
      this.$emit('handleClickBtn', val);
    },
    handleBtnsType() {
      // btn 随机type
      this.btns.forEach((val) => {
        if (val.type) return;
        let tagIndex = Math.floor(Math.random() * 5);
        val['type'] = this.btnsType[tagIndex];
      });
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

<template>
  <div class="btnstep-container">
    <template v-if="!isAddRules">
      <el-button @click="handleStartStep" type="warning">
        重新创建
      </el-button>
      <el-button @click="handleNextStep" type="success">
        完成
      </el-button>
    </template>

    <el-button v-else @click="handleNextStep" type="primary">
      下一步
    </el-button>
  </div>
</template>
<script>
export default {
  props: {
    isAddRules: {
      // 是否为添加规则界面，是，
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  computed: {
    tagsList() {
      return this.$store.state.layout.tagsList;
    }
  },
  methods: {
    handleStartStep() {
      this.$router.push({
        name: "addRules",
        query: { optName: "add", basisType: 1 }
      });
    },
    handleNextStep() {
      this.$emit("handleNextStep");
    }
  }
};
</script>
<style lang="scss">
.btnstep-container {
  margin: 0 20px 20px 0;
  text-align: right;
  .el-button + .el-button {
    margin-left: 20px;
  }
}
</style>

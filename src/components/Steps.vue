<template>
  <el-steps
    class="step-details"
    :active="active"
    align-center
    finish-status="success"
  >
    <el-step title="选择规则类型" description="请选择相应的规则类型"> </el-step>
    <el-step title="完善规则信息" description="请完善相应的规则信息"> </el-step>
  </el-steps>
</template>
<script>
export default {
  props: ["activeStep"],
  computed: {
    active() {
      return this.activeStep;
    }
  }
};
</script>
<style lang="scss">
.step-details {
  margin-top: 50px;
}
</style>

<template>
  <div class="not-found">
    <div class="bg-container">
      <img src="../assets/img/404.gif" alt="图片开小差了^_^" />
    </div>
    <div class="error-handle">
      <router-link to="/">
        <el-button type="primary" size="large">返回首页</el-button>
      </router-link>
      <el-button class="goback-btn" type="primary" size="large" @click="goBack"
        >返回上一页</el-button
      >
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.not-found {
  width: 100%;
  height: calc(100vh - 155px);
  box-sizing: border-box;
  position: relative;
  background: #fff;
}
.bg-container {
  position: absolute;
  height: 90%;
}
.bg-container img {
  width: 100%;
  height: 100%;
}
.error-handle {
  position: absolute;
  bottom: 10%;
  left: 42%;
}
.goback-btn {
  margin-left: 100px;
}
</style>

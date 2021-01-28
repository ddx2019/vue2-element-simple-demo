<template>
  <div class="lmt-copy-right">
    版权所有 © ddx 2021 蜀XXX备12345678号
  </div>
</template>
<script>
export default {
  name: 'copy-right'
};
</script>
<style lang="scss">
.lmt-copy-right {
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background: $header_bg;
  color: #fff;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1200;
}
</style>

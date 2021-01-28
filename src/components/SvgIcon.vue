<template>
  <span>
    <svg
      :class="className"
      aria-hidden="true"
      v-on="$listeners"
      v-bind="$attrs"
    >
      <use :xlink:href="icon" />
    </svg>
  </span>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    iconName: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      default: ""
    }
  },
  computed: {
    icon() {
      return `#icon-${this.iconName}`;
    },
    className() {
      if (this.iconClass) {
        // 如果父组件给子组件传了iconClass，则将该类名用于svg的class上
        return "svg-icon " + this.iconClass;
      } else {
        return "svg-icon";
      }
    }
  }
};
</script>

<style scoped>
.svg-icon {
  /*将icon大小设置和字体大小一致 */
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

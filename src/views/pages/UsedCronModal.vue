<template>
  <div class="used-cron">
    点击显示cron表达式:
    <el-input
      type="text"
      v-model="FormInPopup.cronExpression"
      autocomplete="off"
      class="cron-value_input"
      @input="showCronModal"
    >
      <el-button
        slot="append"
        @click="showCronModal"
        class="el-icon-more"
        title="设置cron表达式"
      >
      </el-button>
    </el-input>
    <br />
    <br />
    <div style="font-size:20px;">
      <p>
        在项目中，一般使用 cron
        表达式来定义定时任务的执行策略，定义你的任务多久执行一次。
      </p>
      <br />
      <img src="@/assets/img/cronExp.png" alt="图片开小差了^_^" />
      <br /><br />
      <p>
        可在 在线Cron表达式生成器 测试你的cron表达式是否正确。
      </p>
      <p>
        更多信息，可参考：<a
          href="https://blog.csdn.net/ddx2019/article/details/110231950"
          >我的博客</a
        >
      </p>
    </div>

    <cron-modal
      :cronValue="cronValue"
      :cronVisible="cronVisible"
      @resetCornPopup="resetCornPopup"
      @submitCornPopup="submitCornPopup"
      @updateCornVisible="updateCornVisible"
    ></cron-modal>
  </div>
</template>
<script>
import CronModal from '@/components/CronModal.vue';
export default {
  components: {
    CronModal
  },
  data() {
    return {
      FormInPopup: {
        cronExpression: '0/5 * * * * ? *'
      },
      cronVisible: false, // cron表达式弹框
      cronValue: '0/5 * * * * ? *' // cron的初始值, 如 0/5 * * * * ? * 表示每隔5秒运行一次
    };
  },
  methods: {
    updateCornVisible(val) {
      this.cronVisible = val;
    },
    showCronModal() {
      // 打开cron表达式的弹框
      this.cronVisible = true;
      this.cronValue = this.FormInPopup['cronExpression'];
    },
    resetCornPopup() {
      this.cronVisible = false;
    },
    submitCornPopup(val) {
      // 提交cron的弹窗
      this.$set(this.FormInPopup, 'cronExpression', val);
      this.cronVisible = false;
    }
  }
};
</script>
<style lang="scss">
.used-cron {
  // background: lightblue;
  height: 100vh;
  padding: 50px;
  .cron-value_input {
    width: 300px;
  }
}
</style>

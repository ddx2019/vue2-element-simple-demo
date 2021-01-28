<template>
  <div style="margin: 10%;">
    <div style="font-size:20px;">
      <p>
        嗯，项目开发到后期，甲方提了一个需求，说要一个这样子的图标选择器（要求图标基本与它一致）;
      </p>
      <br />
      <img src="@/assets/img/funcIcon.png" alt="图片开小差了^_^" />
      <br /><br />
      <p>
        哇哦，这边要求项目基于vue+element开发，甲方后来提的icon的需求却是基于ant,也只好将其集成进项目咯。值得注意的是，这里最好是将antd的组件按需引入，样式一旦全部引入，可能影响原项目中的网页样式。
      </p>
      <p>
        更多信息，可参考：<a
          href="https://blog.csdn.net/ddx2019/article/details/110440856"
          >我的博客</a
        >
      </p>
    </div>

    <br />
    <el-button type="danger" @click="iconPopupVisible = true">
      点击显示图标选择器
    </el-button>
    <a-icon
      style="color:#005d42;font-size:30px;margin-left:50px;"
      v-if="currIcon"
      :type="currIcon"
    />

    <antd-icons
      :iconChooseVisible="iconPopupVisible"
      @handleIconChoose="handleIconChoose"
      @handleIconCancel="handleIconCancel"
      @updateIconVisible="updateIconVisible"
    ></antd-icons>
  </div>
</template>
<script>
import AntdIcons from '@/components/AntdIcons.vue';
export default {
  components: {
    AntdIcons
  },
  data() {
    return {
      iconPopupVisible: false,
      currIcon: ''
    };
  },
  methods: {
    updateIconVisible(val) {
      this.iconPopupVisible = val;
    },
    handleIconChoose(value) {
      this.currIcon = value; //选中图标后， 设置进当前的icon值
      this.iconPopupVisible = false;
    },
    handleIconCancel() {
      this.iconPopupVisible = false;
    }
  }
};
</script>

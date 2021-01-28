<template>
  <div class="antd-icons">
    <el-dialog
      class="comn_dialog"
      title="选择功能图标"
      :visible.sync="visible"
      width="750px"
      top="26vh"
      v-dialogDrag
    >
      <el-tabs v-model="activeName">
        <el-tab-pane label="方向性图标" name="directionIcons">
          <ul>
            <li
              v-for="icon in icons.directionIcons"
              :key="icon"
              class="icon_item"
            >
              <a-icon
                :type="icon"
                :title="icon"
                @click="chooseIcon(icon)"
                :class="{ active: activeIndex === icon }"
              />
            </li></ul
        ></el-tab-pane>
        <el-tab-pane label="指示性图标" name="suggestionIcons"
          ><ul>
            <li
              v-for="icon in icons.suggestionIcons"
              :key="icon"
              class="icon_item"
            >
              <a-icon
                :type="icon"
                :title="icon"
                @click="chooseIcon(icon)"
                :class="{ active: activeIndex === icon }"
              />
            </li></ul
        ></el-tab-pane>
        <el-tab-pane label="编辑类图标" name="editIcons">
          <ul>
            <li v-for="icon in icons.editIcons" :key="icon" class="icon_item">
              <a-icon
                :type="icon"
                :title="icon"
                @click="chooseIcon(icon)"
                :class="{ active: activeIndex === icon }"
              />
            </li></ul
        ></el-tab-pane>
        <el-tab-pane label="数据类图标" name="dataIcons"
          ><ul>
            <li v-for="icon in icons.dataIcons" :key="icon" class="icon_item">
              <a-icon
                :type="icon"
                :title="icon"
                @click="chooseIcon(icon)"
                :class="{ active: activeIndex === icon }"
              />
            </li></ul
        ></el-tab-pane>
        <el-tab-pane label="网站通用类图标" name="webIcons"
          ><ul>
            <li v-for="icon in icons.webIcons" :key="icon" class="icon_item">
              <a-icon
                :type="icon"
                :title="icon"
                @click="chooseIcon(icon)"
                :class="{ active: activeIndex === icon }"
              />
            </li></ul
        ></el-tab-pane>
        <el-tab-pane label="品牌和标志" name="logoIcons"
          ><ul>
            <li v-for="icon in icons.logoIcons" :key="icon" class="icon_item">
              <a-icon
                :type="icon"
                :title="icon"
                @click="chooseIcon(icon)"
                :class="{ active: activeIndex === icon }"
              />
            </li></ul
        ></el-tab-pane>
      </el-tabs>

      <span slot="footer" class="dialog-footer">
        <el-button @click="Cancel">取 消</el-button>
        <el-button type="primary" @click="Save">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {
  directionIcons,
  suggestionIcons,
  editIcons,
  dataIcons,
  webIcons,
  logoIcons
} from '@/enums/antdIcons.js';
export default {
  name: 'AntdIcons',
  props: {
    iconChooseVisible: {
      default: false
    }
  },
  data() {
    return {
      icons: {
        directionIcons,
        suggestionIcons,
        editIcons,
        dataIcons,
        webIcons,
        logoIcons
      },
      choosedIcon: '',
      activeIndex: '',
      activeName: 'directionIcons' // 当前活跃的选项卡名
    };
  },
  computed: {
    visible: {
      get: function() {
        return this.iconChooseVisible;
      },
      set(val) {
        this.$emit('updateIconVisible', val);
      }
    }
  },
  methods: {
    reset() {
      this.activeIndex = '';
    },
    chooseIcon(icon) {
      this.activeIndex = icon;
      this.choosedIcon = icon;
      this.$message.success(`选中的图标名为： ${icon}`);
    },
    Save() {
      if (this.choosedIcon === '') {
        this.$message.warning('尚未选择任何图标');
        return;
      }
      this.reset();
      this.$emit('handleIconChoose', this.choosedIcon);
    },
    Cancel() {
      this.reset();
      this.$emit('handleIconCancel');
    }
  }
};
</script>
<style lang="scss">
.antd-icons {
  .icon_item {
    display: inline-block;
    font-size: 26px;
    margin-right: 6px;
    line-height: 55px;
  }
  .active {
    color: $icon_color;
    background: rgba(247, 243, 243, 0.1);
  }
}
</style>

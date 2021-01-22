<template>
  <el-dialog
    class="comn_dialog"
    :title="dialogTitle"
    :visible.sync="visible"
    :width="popupWidth"
    :top="popupTop"
    :close-on-click-modal="false"
    v-dialogDrag
  >
    <slot>
      <p>弹窗内容自定义</p>
    </slot>
    <span slot="footer" class="dialog-footer">
      <el-button @click="Cancel">取 消</el-button>
      <el-button type="primary" @click="Save">确定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  props: {
    dialogTitle: {
      type: String,
      default: "标题"
    },
    centerDialogVisible: {
      type: Boolean,
      default() {
        return false;
      }
    },
    popupWidth: {
      type: String,
      default() {
        return "430px";
      }
    },
    popupTop: {
      type: String,
      default() {
        return "15vh";
      }
    }
  },
  computed: {
    visible: {
      get() {
        return this.centerDialogVisible;
      },
      set(val) {
        this.$emit("updateVisible", val);
      }
    }
  },
  methods: {
    Cancel() {
      this.$emit("resetPopupData");
    },
    Save() {
      this.$emit("submitPopupData");
    }
  }
};
</script>

<template>
  <div class="markdown-container">
    <div class="container">
      <div class="title">编辑器</div>
      <mavon-editor
        v-model="content"
        ref="md"
        @imgAdd="handleImgAdd"
        @change="handleImgChange"
        class="msg-markdown"
        :subfield="false"
        :toolbars="toolbars"
      />
      <el-button class="editor-btn" type="primary" @click="submit"
        >提交</el-button
      >
    </div>
  </div>
</template>
<script>
//注意如需数据回显：后端擦混base64数据，前端展示图片的时候，需在后端返回的数据前加上字符串 "data:image/jpeg;base64,"
import { MSG_TEMP_TOOLBAR } from '@/enums/editorToolbars.js';
import axios from 'axios';
export default {
  data: function() {
    return {
      content: '',
      html: '',
      configs: {},
      toolbars: MSG_TEMP_TOOLBAR // 富文本的工具栏
    };
  },
  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    handleImgAdd(pos, $file) {
      var formdata = new FormData();
      formdata.append('file', $file);
      //将下面上传接口替换为你自己的服务器接口
      axios({
        url: '/common/upload',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then((res) => {
          this.$refs['md'].$img2Url(pos, res.data.imgURL); //将返回img 地址换到md中
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleImgChange(value, render) {
      // render 为 markdown 解析后的结果,

      this.html = render;
    },
    submit() {
      console.log(this.content);
      console.log(this.html);
      this.$message.success('提交成功！');
    }
  }
};
</script>
<style lang="scss">
.markdown-container {
  .editor-btn {
    margin-top: 20px;
  }
  .title {
    margin-bottom: 10px;
    text-align: center;
    font-size: 20px;
    letter-spacing: 1px;
    color: #333;
    font-weight: 600;
  }
  .msg-markdown {
    height: 600px;
    overflow: auto;
  }
}
</style>

<template>
  <div class="test-pdfjs">
    <el-button type="danger" @click="previewPDF">点击预览pdf</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    previewPDF() {
      let pdfFileUrl =
        "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf";
      // todo 下载 pdfjs 的压缩包，减压后放在public下的static文件夹下，并增加webpack配置
      // window.open(`/static/pdfjs/web/viewer.html?file=${pdfFileUrl}`); // 新开一页，展示pdf文档
    }
  }
};
</script>

<template>
  <div class="hls-test">
    <video class="video-player" ref="myPlayer"></video>
    <el-button @click="videoPlay" type="success">播放</el-button>
    <el-button @click="videoPause" type="danger">暂停</el-button>
  </div>
</template>
<script>
import hlsJS from 'hls.js';
// import 'video.js/dist/video-js.css';

export default {
  data() {
    return {
      hlsel: ''
    };
  },
  mounted() {
    this.initVideo();
  },
  methods: {
    videoPause() {
      if (this.hlsel) {
        this.$refs.myPlayer.pause();
        // this.hlsel.destroy();
        // this.hlsel = null;
      }
    },
    videoPlay() {
      if (this.hlsel) {
        this.$refs.myPlayer.play();
      }
    },
    initVideo() {
      const myPlayer = this.$refs.myPlayer;
      const videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
      if (hlsJS.isSupported()) {
        this.hlsel = new hlsJS();
        this.hlsel.loadSource(videoSrc);
        this.hlsel.attachMedia(myPlayer);
        this.hlsel.on(hlsJS.Events.MANIFEST_PARSED, () => {
          console.log('加载成功');
          myPlayer.play();
        });
        this.hlsel.on(hlsJS.Events.ERROR, (event, data) => {
          // console.log(event, data);
          // 监听出错事件
          console.log('加载失败');
        });
      } else if (myPlayer.canPlayType('application/vnd.apple.mpegurl')) {
        myPlayer.src = videoSrc;
      }
    }
  },
  beforeDestroy() {
    this.hlsel = null;
  }
};
</script>
<style lang="scss">
.hls-test {
  padding: 50px;
  text-align: center;
}
.video-player {
  height: 300px;
  display: block;
  margin: 20px auto;
}
</style>

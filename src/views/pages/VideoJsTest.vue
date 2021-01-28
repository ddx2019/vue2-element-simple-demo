<template>
  <div class="test-videojs">
    <video id="videoPlayer" class="video-js"></video>
    <el-button type="danger" @click="changeSource">切换到CCTV3</el-button>
  </div>
</template>
<script>
import Videojs from 'video.js'; // 引入Videojs
export default {
  data() {
    return {
      nowPlayVideoUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
      options: {
        autoplay: true, // 设置自动播放
        muted: true, // 设置了它为true，才可实现自动播放,同时视频也被静音 （Chrome66及以上版本，禁止音视频的自动播放）
        preload: 'auto', // 预加载
        controls: true // 显示播放的控件
      },
      player: null
    };
  },
  mounted() {
    this.getVideo(this.nowPlayVideoUrl);
  },
  methods: {
    getVideo(nowPlayVideoUrl) {
      this.player = Videojs('videoPlayer', this.options);

      //关键代码， 动态设置src，才可实现换台操作
      this.player.src([
        {
          src: nowPlayVideoUrl,
          type: 'application/x-mpegURL' // 告诉videojs,这是一个hls流
        }
      ]);
      // stackoverflow on  https://stackoverflow.com/questions/59197343/how-i-disable-remove-the-touchstart-event-from-videojs
      const eventsToRemove = [
        'mousemove',
        'mouseover',
        'mouseup',
        'mousedown',
        'mouseleave',
        'touchstart'
      ];

      this.player.off(eventsToRemove);
    },
    changeSource() {
      this.nowPlayVideoUrl = 'http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8';
      console.log(this.nowPlayVideoUrl, '改变了');
    }
  },
  watch: {
    nowPlayVideoUrl(newVal, old) {
      this.getVideo(newVal);
    }
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose(); // Removing Players,该方法会重置videojs的内部状态并移除dom
    }
  }
};
</script>
<style lang="scss">
#videoPlayer {
  width: 500px;
  height: 300px;
  margin: 50px auto;
}
</style>

<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: 
 * @Date: 2021-07-14 14:43:02
 * @LastEditors: gxx
 * @LastEditTime: 2021-07-14 15:36:02
-->
<template>
  <div class="move2top" @click="move" :class="{ hidden: !showIcon }">
    <i class="iconfont">&#xe67c;</i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0,
      defaultTop: 400,
      showIcon: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handelScroll);
  },
  beforeMount() {
    window.removeEventListener("scroll", this.handelScroll);
  },
  methods: {
    move() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    handelScroll() {
      this.scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      this.scrollTop > this.defaultTop
        ? (this.showIcon = true)
        : (this.showIcon = false);
    },
  },
};
</script>

<style scoped>
.move2top {
  position: fixed;
  z-index: 99999;
  right: 30px;
  bottom: 30px;
  cursor: pointer;
  transition: all 0.3s;
  -webkit-transition: all 0.3s; /* Safari 和 Chrome */
}

.hidden {
  opacity: 0;
  transform: translateY(30px);
}

@font-face {
  font-family: "iconfont"; /* Project id 2673783 */
  src: url("//at.alicdn.com/t/font_2673783_4he02dvn9sj.woff2?t=1626246056610")
      format("woff2"),
    url("//at.alicdn.com/t/font_2673783_4he02dvn9sj.woff?t=1626246056610")
      format("woff"),
    url("//at.alicdn.com/t/font_2673783_4he02dvn9sj.ttf?t=1626246056610")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 50px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>

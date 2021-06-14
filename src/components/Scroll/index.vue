<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  mounted() {
    var scroll = new BScroll(this.$refs.wrapper, {
      tap: true,
      probeType: 1,
    });
    scroll.on("scroll", (pos) => {
      this.handleToScroll(pos)
    });
    scroll.on("touchEnd", (pos) => {
      this.handleTouch(pos)
    });
  },
  props: {
    handleToScroll: {
      type: Function,
      default: function () {},
    },
    handleTouch: {
      type: Function,
      default: function () {},
    },
  },
};
</script>

<style scpoed>
.wrapper {
  height: 100%;
}
</style>
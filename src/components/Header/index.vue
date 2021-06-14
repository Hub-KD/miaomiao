<template>
  <!-- 导航 -->
  <div class="nav">{{title}}</div>
</template>

<script>
export default {
  props:['title']
};
</script>

<style scoped>
.nav {
    max-width: 10rem;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1.6rem;
    line-height: 1.6rem;
    background-color: #ff5f16;
    text-align: center;
    overflow: hidden;
    font-size: .48rem;
    color: #fff;
    z-index: 10;
}
</style>

<template>
  <div class="tabbar">
    <ul>
      <router-link tag="li" to="/home/listing">
        <a href="" class="current">正在热映</a>
      </router-link>
      <router-link tag="li" to="/home/list">
        <a href="">即将上映</a>
      </router-link>
    </ul>
  </div>
</template>

<script>


export default {
  mounted() {
 
  },
};
</script>

<style scoped>
.router-link-active a {
  color: #ff5f16 !important;
}
.movieList .tabbar {
  width: 100%;
  height: 1.066667rem;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}
.movieList .tabbar ul {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.movieList .tabbar ul li {
  text-align: center;
  width: 50%;
}
.movieList .tabbar ul li a {
  font-size: 0.373333rem;
  color: #666;
}
</style>
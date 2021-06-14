<template>
  <div class="list" v-show="!isShow">
    <ul>
      <li
        v-for="data in movielist.filter((el, index) => {
          return index > 0;
        })"
        :key="data.id"
      >
        <a href="javascript:;" >
          <div class="msg">
            <div class="t">{{ data.name }}</div>
            <div class="c">广州市越秀区农林下路4-6号锦轩现代城四楼</div>
          </div>
          <div class="pay">
            <div class="t">￥49起</div>
            <div class="c">距离未知</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movielist: [],
    };
  },
  mounted() {
    this.axios.get("/ajax/filterCinemas?ci=57").then((res) => {
      this.movielist = res.data.brand.subItems;
    });
  },
  methods:{

  }
};
</script>

<style scoped>
.cinemaList .list ul li {
  width: 100%;
  height: 2rem;
  padding: 0.4rem;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
}
.cinemaList .list ul li a {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cinemaList .list ul li a .msg {
  width: 80%;
}
.cinemaList .list ul li a .msg .t {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.4rem;
}
.cinemaList .list ul li a .msg .c {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.32rem;
  color: #666;
}
.cinemaList .list ul li a .pay .t {
  font-size: 0.4rem;
  color: #ff5f16;
}
.cinemaList .list ul li a .pay .c {
  font-size: 0.32rem;
  color: #666;
}
</style>
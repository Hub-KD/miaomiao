<template>
  <div class="movieList">
    <Tabbar></Tabbar>
    <div style="height: 13.786667rem" ref="list_body">
      <Scroll :key="datalist" :handleToScroll="handleToScroll" :handleTouch="handleTouch">
        <div class="list">
          <ul class="load">
            {{
              pulldownmsg
            }}
          </ul>
          <ul v-for="data in this.$store.state.comlist" :key="data.id">
            <li>
              <a href="javascript:;" class="msg">
                <img :src="data.img |  dataimg('255.255')" alt="" />
                <div class="text">
                  <p class="movieName">{{ data.nm }}</p>
                  <p class="movieUser">主演：{{ data.star }}</p>
                  <p>{{ data.showInfo }}</p>
                </div>
              </a>
              <a href="javascript:;" class="pay">购票</a>
            </li>
          </ul>
        </div>
      </Scroll>
    </div>
  </div>
</template>

<script>
import Tabbar from "./tabbar";
import Vue from "vue";
Vue.filter("dataimg", (data, size) => data.replace("w.h", size));
export default {
  components: {
    Tabbar,
  },
  mounted() {
    if(this.$store.state.comlist.length == 0){
      this.$store.dispatch('getComList')
    }else {
      console.log('已经缓存')
    }
   
  },
  data() {
    return {
      datalist: [],
      pulldownmsg: ""
    };
  },
    methods: {
    handleToScroll(pos) {
      if (pos.y > 30) {
        this.pulldownmsg = "正在更新中...";
      }
    },
    handleTouch(pos) {
      if (pos.y > 30) {
        this.axios.get("/ajax/comingList?ci=10&token=&limit=10").then((res) => {
          this.pulldownmsg = "更新完成";
          setTimeout(() => {
            this.datalist = res.data.coming;
            this.pulldownmsg = "";
          }, 1000);
        });
      }
    },
  },
};
</script>

<style scoped>
.movieList .list ul li {
  width: 100%;
  height: 3.306667rem;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.movieList .list ul li .msg {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 85%;
  font-size: 0.346667rem;
  color: #666;
}
.movieList .list ul li .msg .text {
  padding: 0 0.4rem;
  width: 5.333333rem;
}
.movieList .list ul li .msg .text .movieName {
  margin-bottom: 0.4rem;
  font-size: 0.426667rem;
  color: #191a1b;
}
.movieList .list ul li .msg .text .movieUser {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.movieList .list ul li .pay {
  display: block;
  width: 15%;
  height: 0.666667rem;
  line-height: 0.666667rem;
  text-align: center;
  color: #ff5f16;
  border: 1px solid #ff5f16;
  font-size: 0.373333rem;
  padding: 0 0.133333rem;
  box-sizing: border-box;
}
.movieList .list ul li .msg img {
  width: 1.76rem;
  height: 2.453333rem;
}
.load {
  font-size: 0.426667rem;
  text-align: center;
}
</style>
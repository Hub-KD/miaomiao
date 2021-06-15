<template>
  <div class="movieList">
    <Tabbar></Tabbar>

    <div
      class="list"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      infinite-scroll-immediate-check='false'
    >
      <ul class="load">
        {{
          pulldownmsg
        }}
      </ul>
      <ul v-for="data in datalist" :key="data.id" class="listul">
        <li>
          <a href="javascript:;" class="msg" @click="cinemadetail(data.id)">
            <img :src="data.img | dataimg('255.255')" alt="" />
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
  </div>
</template>

<script>
import Tabbar from "./tabbar";
import Vue from "vue";
import { Indicator } from "mint-ui";
import { InfiniteScroll } from "mint-ui";
Vue.use(InfiniteScroll);
// import BScroll from "better-scroll";

Vue.filter("dataimg", (data, size) => data.replace("w.h", size));
export default {
  components: {
    Tabbar,
  },

  data() {
    return {
      datalist: [],
      pulldownmsg: "",
      loading: "",
    };
  },
  mounted() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle",
    });
    this.axios.get("/ajax/movieOnInfoList").then((res) => {
      this.datalist = res.data.movieList;
      // this.$nextTick(() => {
      //   var scroll = new BScroll(this.$refs.list_body, {
      //     tap: true,
      //     probeType: 1,
      //   });
      //   scroll.on("scroll", (pos) => {
      //     if (pos.y > 30) {
      //       this.pulldownmsg = "正在更新中...";
      //     }
      //   });
      //   scroll.on("touchEnd", (pos) => {
      //     if (pos.y > 30) {
      //       this.axios.get("/ajax/movieOnInfoList?ci=11").then((res) => {
      //         this.pulldownmsg = "更新完成";
      //         setTimeout(() => {
      //           this.datalist = res.data.movieList;
      //           this.pulldownmsg = "";
      //         }, 1000);
      //       });
      //     }
      //   });
      // });
      Indicator.close();
    });
  },
  methods: {
    handleToScroll(pos) {
      if (pos.y > 30) {
        this.pulldownmsg = "正在更新中...";
      }
    },
    handleTouch(pos) {
      if (pos.y > 30) {
        this.axios.get("/ajax/movieOnInfoList?ci=11").then((res) => {
          this.pulldownmsg = "更新完成";
          setTimeout(() => {
            this.datalist = res.data.movieList;
            this.pulldownmsg = "";
          }, 1000);
        });
      }
    },

    cinemadetail(id) {
      this.$router.push(`/detail/${id}`);
    },
    loadMore() {
      this.loading = true;
      console.log('1')
     this.axios.get("/ajax/movieOnInfoList").then((res) => {
      this.datalist = [...this.datalist,...res.data.movieList];
       this.loading = false;
    });
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
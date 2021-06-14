<template>
   <div>
    <Header title="喵喵影院"></Header>
      <div class="cinemaList">
        <div class="tabbar">
            <ul>
                <li>
                    <a href="javascript:;" class="choose" @click="handleclick()">{{citynamedefault}}<span class="iconfont">&#xe502</span></a>
                </li>
                <li><a href="javascript:;"><span class="iconfont" style="font-size: .64rem;">&#xe643</span></a></li>
            </ul>
        </div>
        <City v-show="isShow" @editname="editname($event)"></City>
        <Movielist></Movielist>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import City from "./city.vue";
import Movielist from "./movielist";
export default {
  components: {
    Header,
    City,
    Movielist,
  },
  methods: {
    handleclick() {
      this.isShow = !this.isShow;
    },
    editname(ev) {
      this.citynamedefault = ev;
    },
  },
  data() {
    return {
      isShow: false,
      citynamedefault: "城市选择",
    };
  },
};
</script>
<style lang="less" scoped>
.cinemaList {
  position: relative;
}
.cinemaList .tabbar {
  height: 1.173333rem;
  background-color: #fff;
}
.cinemaList .tabbar ul {
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  padding: 0 0.266667rem;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
}
.cinemaList .tabbar ul li a {
  font-size: 0.426667rem;
}
</style>
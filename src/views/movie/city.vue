<template>
  <div>
    <div class="cinemaCity">
      <div class="w">
        <div class="citylist">
          <div class="t">热门城市</div>
          <div class="hot">
            <ul>
              <li>
                <a href="">深圳</a>
              </li>
              <li>
                <a href="">上海</a>
              </li>
              <li>
                <a href="">北京</a>
              </li>
              <li>
                <a href="">广州</a>
              </li>
            </ul>
          </div>
          <div>
            <!-- <div class="t">{{city.index}}</div> -->
            <div class="c">
              <ul>
                <li v-for="city in citylist" :key="city.cityId">
                  <a href="javascript:;" @click=handleclick(city.cityNm) >{{city.cityNm}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="chooseletter">
        <ul>
          <li>
            <a href="">A</a>
          </li>
          <li>
            <a href="">B</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            citylist:[]
        }
    },
  mounted() {
    this.axios
      .get(
        "http://api.k780.com/?app=weather.city&areaType=cn&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json"
      )
      .then((res) => {
        this.citylist = res.data.result.dtList;
        console.log(this.citylist)
        // this.citylist = this.formatCityList(cities);
      });
  },
  methods: {
    formatCityList(cities) {
      var cityList = [];
      var hotList = [];
      for (var i = 0; i < cities.length; i++) {
        var firstLetter = cities[i].full_spell.substring(0, 1);
        if (toCom(firstLetter)) {
          cityList.push({
            index: firstLetter,
            list: [{ name: cities[i].city_name, id: cities[i].parent_id }],
          });
        } else {
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({
                name: cities[i].city_name,
                id: cities[i].parent_id,
              });
            }
          }
        }
      }
      function toCom(firstLetter) {
        for (var i = 0; i < cityList.length; i++) {
          if (cityList[i].index === firstLetter) {
            return false;
          }
        }
        return true;
      }
      cityList.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1;
        } else if (n1.index < n2.index) {
          return -1;
        } else {
          return 0;
        }
      });
      //   console.log(cityList)
      return cityList;
    },
    handleclick(name){
        this.$emit('editname',name)
    }
  },
};
</script>

<style scoped>
.cinemaCity {
  position: relative;
  background-color: #ebebeb;
}
.cinemaCity .citylist .t {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.373333rem;
  color: #333;
}
.cinemaCity .citylist .hot {
  background-color: #f5f5f5;
  overflow: hidden;
}
.cinemaCity .citylist .hot ul li {
  float: left;
  margin: 0.4rem;
}
.cinemaCity .citylist .hot ul li a {
  border: 1px solid #ccc;
  width: 1.6rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  display: block;
  padding: 0 0.266667rem;
  font-size: 0.373333rem;
  color: #333;
}
.cinemaCity .citylist .c {
  background-color: #f5f5f5;
  overflow: hidden;
}
.cinemaCity .citylist .c ul li {
  box-sizing: border-box;
  padding-left: 0.266667rem;
  border-bottom: 1px solid #ccc;
}
.cinemaCity .citylist .c ul li a {
  font-size: 0.373333rem;
  color: #333;
}
.cinemaCity .chooseletter {
  position: absolute;
  top: 0;
  right: 0;
}
.cinemaCity .chooseletter ul li a {
  font-size: 0.373333rem;
  color: #333;
}
</style>
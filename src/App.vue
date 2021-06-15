<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="isFootShow"></Footer>
  </div>
</template>
<script>
import Footer from '@/components/Footer'
import {mapState} from 'vuex'

export default {
  components:{
    Footer
  },
  computed:{
    // isShow(){
    //   return this.$store.state.isFootShow
    // }
    ...mapState(['isFootShow'])
  }


}
</script>
<style lang="less" >
@media screen and (min-width:750px){html{font-size:75px !important;}}*{margin:0;padding:0;}body{padding-top:1.6rem;padding-bottom:1.386667rem;min-width:320px;max-width:750px;width:10rem;margin:0 auto;line-height:1.5;font-family:Arial,Helvetica;background:#fff;-webkit-tap-highlight-color:rgba(0,0,0,0);}li{list-style:none;}a{text-decoration:none;color:#000;}.w{box-sizing:border-box;padding:0 0.4rem;height:100%;}.swiper-container{width:100%;height:100%;margin-left:auto;margin-right:auto;}.swiper-slide{text-align:center;font-size:18px;background:#fff;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;}.iconfont{font-family:"iconfont" !important;font-size:0.426667rem;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
</style>



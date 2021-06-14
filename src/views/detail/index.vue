<template>
  <div>
      {{nm}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      nm:''
    } 
  },
mounted(){
  // console.log(this.$route.params.id)
  this.axios.get(`/ajax/detailmovie?movieId=${this.$route.params.id}`).then((res) => {
    this.nm = res.data.detailMovie.nm
  });

},
beforeMount(){
    // this.$store.state.isFootShow = false
    this.$store.commit('hideFoot',false)
},
beforeDestroy() {
    // this.$store.state.isFootShow = true
    this.$store.commit('hideFoot',true)

},
}
</script>

<style>

</style>
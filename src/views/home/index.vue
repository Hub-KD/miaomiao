<template>
  <div>
    <Header title="喵喵电影"></Header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  components: {
    Header

  },
};
</script>



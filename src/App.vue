<template>
  <div id="app">
    <router-view></router-view>


    <TabBar/>
  </div>
</template>

<script>

import TabBar from "common/footer/"
export default {
  name: 'app',
  components: {
   TabBar
  }
}
</script>

<style>

  

</style>

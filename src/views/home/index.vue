<template>
<div class="box">
  <swiper :options="swiperOption">
    <swiper-slide>
      <img src="//media.china-sss.com/img/M00/05/48/wKjFbF2jzuaAWWNYAAKaQsTlCEg025.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="//media.china-sss.com/img/M00/05/55/wKjFbF248vmAF4KjAAHwsOks1nA489.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="//media.china-sss.com/img/M00/05/09/wKjFbF0-1dGAGTFkAAKMcwtb2y4372.jpg" alt="">
    </swiper-slide>
  </swiper>
      <input type="text" class="searchIpt">


</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
 
export default {
  components: {
    swiper,
    swiperSlide
  }
}</script>
<style scoped>
.searchIpt{
  width: 6rem;
  height: .4rem;
  position: absolute;
  top: 3rem;
  z-index: 99;
  left: .7rem;
  border-radius: .2rem;
  border: 1px solid red;
}
</style>



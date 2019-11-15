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
  <div>
    <div class="nav-box">
    </div>
    <div class="main">
      <ul>
        <li>
          <div class="left">
            <img src="http://media.china-sss.com/pics/gallery/201711/b740bb8d-1a69-42e4-af3c-5b49a637427e_201711201413_500_350.jpg" alt="">
          </div>
          <div class="right">
            <h4>【名古屋】深圳直飞日本名古屋往返机票5日自由行</h4>
            <p>11/11当日每满700减20 </p>
            <span>【名古屋】深圳直飞日本名古屋往返机票5日自由行</span>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="http://media.china-sss.com/pics/gallery/201711/b740bb8d-1a69-42e4-af3c-5b49a637427e_201711201413_500_350.jpg" alt="">
          </div>
          <div class="right">
            <h4>【名古屋】深圳直飞日本名古屋往返机票5日自由行</h4>
            <p>11/11当日每满700减20 </p>
            <span>【名古屋】深圳直飞日本名古屋往返机票5日自由行</span>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="http://media.china-sss.com/pics/gallery/201711/b740bb8d-1a69-42e4-af3c-5b49a637427e_201711201413_500_350.jpg" alt="">
          </div>
          <div class="right">
            <h4>【名古屋】深圳直飞日本名古屋往返机票5日自由行</h4>
            <p>11/11当日每满700减20 </p>
            <span>【名古屋】深圳直飞日本名古屋往返机票5日自由行</span>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="http://media.china-sss.com/pics/gallery/201711/b740bb8d-1a69-42e4-af3c-5b49a637427e_201711201413_500_350.jpg" alt="">
          </div>
          <div class="right">
            <h4>【名古屋】深圳直飞日本名古屋往返机票5日自由行</h4>
            <p>11/11当日每满700减20 </p>
            <span>【名古屋】深圳直飞日本名古屋往返机票5日自由行</span>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="http://media.china-sss.com/pics/gallery/201711/b740bb8d-1a69-42e4-af3c-5b49a637427e_201711201413_500_350.jpg" alt="">
          </div>
          <div class="right">
            <h4>【名古屋】深圳直飞日本名古屋往返机票5日自由行</h4>
            <p>11/11当日每满700减20 </p>
            <span>【名古屋】深圳直飞日本名古屋往返机票5日自由行</span>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="http://media.china-sss.com/pics/gallery/201711/b740bb8d-1a69-42e4-af3c-5b49a637427e_201711201413_500_350.jpg" alt="">
          </div>
          <div class="right">
            <h4>【名古屋】深圳直飞日本名古屋往返机票5日自由行</h4>
            <p>11/11当日每满700减20 </p>
            <span>【名古屋】深圳直飞日本名古屋往返机票5日自由行</span>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="http://media.china-sss.com/pics/gallery/201711/b740bb8d-1a69-42e4-af3c-5b49a637427e_201711201413_500_350.jpg" alt="">
          </div>
          <div class="right">
            <h4>【名古屋】深圳直飞日本名古屋往返机票5日自由行</h4>
            <p>11/11当日每满700减20 </p>
            <span>【名古屋】深圳直飞日本名古屋往返机票5日自由行</span>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="http://media.china-sss.com/pics/gallery/201711/b740bb8d-1a69-42e4-af3c-5b49a637427e_201711201413_500_350.jpg" alt="">
          </div>
          <div class="right">
            <h4>【名古屋】深圳直飞日本名古屋往返机票5日自由行</h4>
            <p>11/11当日每满700减20 </p>
            <span>【名古屋】深圳直飞日本名古屋往返机票5日自由行</span>
          </div>
        </li>
      </ul>
    </div>
  </div>

</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
import { log } from 'util';
export default {
  data:{

  },
  mounted () {
    console.log(11)
    axios.get('/api?cityId=211&positionId=102&t=201911142124&springsign=4E329389FA3402E4D389956D28A3B6B954E7C35D', function (res) { 
   console.log(res) 
      
    })
  },
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
.nav-box{
  width: 100%;
  height: 2.5rem;
  background: skyblue;
}
li{
  list-style: none;
}
ul{
    margin: 0;
  padding: 0;

}
.left{
  width: 40%;
  height: 2rem;
  text-align: center;
  float: left;
}
.right{
  width: 55%;
  float: left;
}
.left img{
  width: 1.8rem;
  height: 1.8rem;
  margin-top: .3rem;
}
.main li{
  width: 100%;
  height: 2rem;
}
</style>



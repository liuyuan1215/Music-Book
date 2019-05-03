<template>
  <div class='slide-wraper'>
    <ul class="slide">
      <transition-group name="fade">
        <li v-for="(value,index) in imgs" :key="index" v-show="index==iNow">
          <img :src="value" alt>
        </li>
      </transition-group>
    </ul>
    <ul class="btns">
      <li v-for="(i,index) in imgs.length" :key="index" :class="{active:index == iNow}"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        "https://img3.doubanio.com/view/subject/l/public/s24476315.jpg",
        "https://img3.doubanio.com/view/subject/l/public/s29895502.jpg",
        "https://img3.doubanio.com/view/subject/l/public/s28543782.jpg",
        "https://img1.doubanio.com/view/subject/l/public/s29543659.jpg"
      ],
      iNow: 0
    };
  },
  created() {
    setInterval(() => {
      this.iNow++;
      if (this.iNow == this.imgs.length) {
        this.iNow = 0;
      }
    }, 1000);
  }
};
</script>

<style scoped>
.slide li{
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.slide img{
  width: 100%;
  height: 7rem;
}
.slide-wraper{
    position: relative;
    height: 7rem;
    overflow: hidden;
}
.btns{
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom:0.2rem;
}
.btns li {
  width: 0.2rem;
  height: 0.2rem;
  background: #234567;
  border-radius: 50%;
  float: left;
  margin-right: 0.1rem;
}
.btns li.active {
  background: #fff;
}
.fade-enter{
    transform: translateX(100%);
}
.fade-enter-active{
    transition: transform 1s ease;
}
.fade-enter-to{
    transform: translateX(0);
}
.fade-leave{
    transform: translateX(0);
}
.fade-leave-active{
    transition: transform 1s ease;
}
.fade-leave-to{
    transform: translateX(-100%);
}
</style>
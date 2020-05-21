<template>
  <div class="container">
    <div class="topflex">
      <div class="topflex-left">
        <div class="addtime">{{formatTime(date)}}</div>
        <div
          class="manage-wel"
        >{{JSON.stringify(userInfo) === '{}' ? '请登录' : `欢迎，`+userInfo.userName}}</div>
      </div>
      <div class="weather">
        <div class="weather-date">{{weather.date}}</div>
        <div class="weather-flex">
          <div class="weather-flex-one">
            <img class="weather-flex-one-dayPictureUrl" :src="weather.dayPictureUrl" alt />
            <img class="weather-flex-one-nightPictureUrl" :src="weather.nightPictureUrl" alt />
            <div class="weather-flex-one-temperature">{{weather.temperature}}</div>
          </div>
          <div class="weather-flex-two">
            <div class="weather-flex-two-weather">{{weather.weather}}</div>
            <div class="weather-flex-two-wind">{{weather.wind}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="welcome">请 开 始 你 的 工 作 !</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import Moment from "moment";
export default {
  data() {
    return {
      date: new Date(),
      weather: []
    };
  },
  mounted() {
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.date = new Date(); // 修改数据date
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },
  components: {},
  created() {
    axios
      .get(
        "https://bird.ioliu.cn/v1?url=http://api.map.baidu.com/telematics/v3/weather?location=哈尔滨&output=json&ak=3p49MVra6urFRGOT9s8UBWr2"
      )
      .then(res => {
        console.log(res.data);
        console.log(res.data.results[0].weather_data[0]);
        this.weather = res.data.results[0].weather_data[0];
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    formatTime(value) {
      return Moment(value).format("YYYY-MM-DD HH:mm:ss");
    }
  }
};
</script>

<style lang="scss">
.container {
  position: fixed;
  left: 13vw;
  width: 81vw;
  margin: 5vh 3vw;
  height: 80vh;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
}
.topflex {
  display: flex;
  border-bottom: 1px solid #6375eb;
  justify-content: space-between;
}
.addtime {
  font-size: 18px;
  padding: 15px 15px 10px 15px;
}
.manage-wel {
  font-size: 18px;

  padding: 0 15px 15px 15px;
}
.weather {
  padding: 10px 15px;
  float: right;
  &-date {
  }
  &-flex {
    display: flex;
    margin-left: 10px;
    margin-top: 5px;
    &-one {
      margin-right: 20px;
      &-dayPictureUrl {
        width: 22px;
        margin-right: 12px;
      }
      &-nightPictureUrl {
        width: 22px;
        margin-right: 6px;
      }
      &-temperature {
      }
    }
    &-two {
      text-align: left;
      &-weather {
      }
      &-wind {
      }
    }
  }
}
.welcome {
  height: 60vh;
  color: #6375eb;
  font-size: 50px;
  text-align: center;
  line-height: 60vh;
}
</style>

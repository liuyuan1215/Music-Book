<template>
  <div>
    <van-nav-bar class="top-nav" title="搜索" left-text="返回" @click-left="$router.go(-1)"></van-nav-bar>
    <div class="div"></div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    }
  }
};
</script>

<style lang="scss" scoped>
.top-nav {
  position: fixed;
  top: 0;
  width: 100%;
}
.van-nav-bar__title {
  color: #3750b2;
  font-weight: bolder;
}
.div{
    height: 46px;
}
</style>
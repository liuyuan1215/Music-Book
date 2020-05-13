<template>
  <div
    class="container"
  >{{JSON.stringify(userInfo) === '{}' ? '' : userInfo.userName}} 请 开 始 你 的 工 作 ！</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {},
  created() {},
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {}
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
  color: #6375eb;
  font-size: 50px;
  text-align: center;
  line-height: 80vh;
}
</style>

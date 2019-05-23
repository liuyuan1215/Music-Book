<template>
  <div class="footer">
      <ul class="footer-list" :style='{color:selectMenu.color}'>
          <li v-for='(obj,index) in menu' :key='index' @click="$emit('change',index)">
              <router-link :to="obj.path">{{obj.name}}</router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:['menu','selectMenu']
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 1rem;
  background: #1c8a92;
  line-height: 1rem;
  position: fixed;
  bottom: 0;
}
.footer-list {
  display: flex;
}
.footer-list li {
  flex: 1;
}
.footer-list a {
  color: #000;
  outline: none;
  margin: auto;
}
.footer-list a.router-link-exact-active {
  color: #fff;
  outline: none;
}
</style>
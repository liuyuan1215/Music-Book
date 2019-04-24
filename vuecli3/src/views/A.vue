<template>
    <div>
        <h1>title1</h1>
        <div>
            <router-link to='/Test1'>页面1</router-link> |
            <router-link to='/Test2'>页面2</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
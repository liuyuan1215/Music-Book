<template>
    <div>
        <h1>title2</h1>
        {{$route.params.name}}
        {{$route.params.age}}
    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                msg:'lt'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
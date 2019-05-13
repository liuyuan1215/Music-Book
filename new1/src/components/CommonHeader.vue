<template>
    <div class='header' :style='{color:selectMenu.color}'>
        <div>
            <p class='header-title'>{{selectMenu.name}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props:['selectMenu']
    }
</script>

<style scoped>
.header{
        width:100%;
        height: 1rem;
        background: #1c8a92;
        line-height: 1rem;
        color: #fff;
        position: fixed;
        top:0;
    }
    .header-title{
        font-size: 0.4rem;
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
</style>
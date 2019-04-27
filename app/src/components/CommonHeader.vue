<template>
    <div class='header'>
        <div>
            <span class='header-btn'>首页</span>
            <span class='header-title'>电影</span>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .header{
        width:100%;
        height: 1rem;
        background: #00a862;
        line-height: 1rem;
        color: #fff;
        position: fixed;
    }
    .header-btn{
        position: absolute;
        left:0.1rem;
    }
    .header-title{
        font-size: 0.5rem;
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
</style>
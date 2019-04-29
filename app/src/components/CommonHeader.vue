<template>
    <div class='header' :style='{background:selectMenu.bg}'>
        <div>
            <span class='header-btn'>首页</span>
            <span class='header-title'>{{selectMenu.name}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['selectMenu']
    }
</script>

<style>
    .header{
        width:100%;
        height: 1rem;
        background: #077c84;
        line-height: 1rem;
        color: #fff;
        position: fixed;
        top:0;
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
<template>
    <div class='footer'>
        <ul class='footer-list'>
            <li>
                <router-link to=''>电影</router-link>
            </li>
            <li>
                <router-link to=''>音乐</router-link>
            </li>
            <li>
                <router-link to=''>书籍</router-link>
            </li>
            <li>
                <router-link to=''>图片</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .footer{
        width:100%;
        height: 1rem;
        background: #00a862;
        line-height: 1rem;
        position: fixed;
        bottom: 0;
    }
    .footer-list{
        display: flex;
    }
    .footer-list li{
        flex:1;
        text-align: center;
    }
</style>
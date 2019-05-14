<template>
    <div>
        <div id="a">
            <div id="b">
                <h4>基本信息</h4>
                <p>昵称：name</p>
                <p>简介：我在未来等你</p>
                <p>注册时间：20xx-xx-xx</p>
                <p>等级：Lv xx</p>
                <p>生日：19xx-xx-xx</p>
                <p>性别：女</p>
                <p>所在地：黑龙江</p>
            </div>
        </div>
        <div id='c' @click='goOne'>查看首页</div>
    </div>
</template>

<script>
    export default {
        methods: {
            goOne(){
                this.$router.push('/one')
            }
        },
    }
</script>

<style>
    #a{
        background: url('/user/head-image1.png') no-repeat;
        background-size: 100%;
    }
    #b{
        color:#eee;
        margin-left: 20px;
        margin-right: 20px;
    }
    #b :nth-child(n){
        margin: 5px;
    }
    #b :first-child{
        margin-top: 0px;
    }
    #b :last-child{
        margin-bottom: 0px;
    }
    #b h4{
        text-align: center;
    }
    #c{
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        background: #1c8a92;
        color:#fff;
        text-align: center;
    }
</style>
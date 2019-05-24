'<template>
    <div class='header' :style='{color:selectMenu.color}'>
        <div>
            <!-- <div id='prev' @click = 'goHome()' v-if='isShow'>&lt;</div> -->
            <div id='home' @click = 'goHome()' v-if='isShow'><i class="iconfont icon-home"></i></div>
            <p class='header-title'>{{selectMenu.name}}</p>    
        </div>
    </div>
</template>

<script>
    export default {
        props:['selectMenu','isShow'],
        methods: {
            goHome(){
                this.$router.push('/')
                if(this.$router.history.current.path == '/'){
                    this.$emit('aa');
                }
            }
        }
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
    #home{
        width: 30px;
        height: 1rem;
        font-size: 30px;
        text-align: center;
        color:#f9f9f9;
        line-height: 1rem;
    }
</style>
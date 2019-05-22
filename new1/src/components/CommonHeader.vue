'<template>
    <div class='header' :style='{color:selectMenu.color}'>
        <div>
            <!-- <div id='prev' @click = 'goPrev($event)' v-if='isShow'>&lt;</div> -->
            <!-- <div id='prev' @click="$emit('goPrev')" v-if='isShow'>&lt;</div> -->
            <div id='prev' @click = 'goPrev()' v-if='isShow'>&lt;</div>
            <!-- v-for='(obj,index) in menu' :key='index' @click="$emit('change',index)" -->
            <p class='header-title'>{{selectMenu.name}}</p>    
        </div>
    </div>
</template>

<script>
    export default {
        props:['selectMenu','menu','isShow'],
        methods: {
        //     goPrev(){
        //     this.$router.go(-1);
        //     //console.log(e.currentTarget.nextElementSibling.innerHTML);
        //   }
            goPrev(){
                this.$router.go(-1);
                if(this.$router.history.current.path == '/'){
                    this.selectMenu.name =='首页'
                }else if(this.$router.history.current.path == '/two'){
                    this.selectMenu.name =='音乐'
                }else if(this.$router.history.current.path == '/three'){
                    this.selectMenu.name =='我的'
                }
          }
        },
        // computed:{
        //     path(){
        //         console.log(this.$router.history.current.path == '/')
        //         return this.$router.history.current.path == '/' ? false:true;
        //     }
        // },
        // computed:{
        //     title(){
        //         if(this.$router.history.current.path == '/'){
        //             this.selectMenu.name =='首页'
        //         }else if(this.$router.history.current.path == '/two'){
        //             this.selectMenu.name =='音乐'
        //         }else if(this.$router.history.current.path == '/three'){
        //             this.selectMenu.name =='我的'
        //         }
        //     }
        // }
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
    #prev{
        width: 30px;
        height: 100%;
        font-size: 25px;
        text-align: center;
    }
</style>
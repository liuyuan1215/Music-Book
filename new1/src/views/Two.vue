<template>
    <div>
        <div id='div1'>
            <h4 class='recommended'>推荐歌曲</h4>
            <aplayer id='music' :music='list[0]' :list='list' v-if='isShow' showLrc/>
        </div>
        <div id="div2">
            <h4 class='recommended'>搜索更多</h4>
            <div id='div3'>
                <input id='search' type="text" placeholder='大家都在搜 好妹妹乐队'>
                <button type='button' id='btn'>搜索</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';
    import Aplayer from 'vue-aplayer';
    export default {
        data() {
            return {
                list:[],
                isShow:false,
            }
        },
        components: {
            Aplayer
        },
        computed: {
            music(){
                return this.list[0];
            }
        },
        created(){
            Axios.get('/data/musicdata.json')
            .then((result)=>{
                result.data.musicData.forEach((obj)=>{
                    let obj1={
                        title:obj.title,
                        artist:obj.author,
                        src:obj.src,
                        pic:obj.musicImgSrc,
                        lrc:`http://localhost:8080/${obj.lrc}`
                    }
                    this.list.push(obj1);
                });
                this.isShow = true;
            })
            .catch();
        }
    }
</script>

<style>
    .recommended{
        text-align: center;
        color:#1c8a92;
        font-weight: bolder;
    }
    #div3{
        height: 30px;
        position: relative;
        width:100%;
    }
    #search{
        height: 32px;
        width: 100%;
        border-top:1px solid #ccc;
        border-left:1px solid #ccc;
        border-bottom:1px solid #ccc;
        outline: none;
        text-indent: 5px;
    }
    #btn{
        height: 34px;
        position: absolute;
        right: 0;
        top: 0;
        border:1px solid #ccc;
        outline: none;
    }
</style>
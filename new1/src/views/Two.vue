<template>
    <div>
        <div id='div1'>
            <aplayer id='music' :music='list[0]' :list='list' v-if='isShow' showLrc/>
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
    #div1{
        position: fixed;
        top: 1rem;
        width: 100%;
    }
</style>
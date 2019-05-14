<template>
    <div>
        <div id="user">
            <div id='head-image'>
                <img src="/user/head-image.png" alt="">
            </div>
            <div id='information'>
                <div>
                    <h4 id='name'>name</h4>
                    <p id='introduction'>简介：我在未来等你</p>
                </div>
            </div>
            <div id="more">
                <button @click='goMore'>更多</button>
            </div>
        </div>

        <div id='photo'>
            <img v-for='(obj,index) in $store.state.photoData' :key='index' @click='goDetail(index)' :src="obj.src" alt="">
        </div>
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        created(){
            Axios.get('/data/photodata.json')
            .then((result)=>{
                this.$store.commit('addPhoto',result.data.photoData);
            })
        },
        methods:{
            goDetail(index){
                this.$router.push('/threedetail/'+index);
            },
            goMore(){
                this.$router.push('/threemore')
            }
        }
    }
</script>

<style>
    #user{
        background: #eeeeee;
        border:1px solid #ccc;
        height: 1.5rem;
        display: flex;
    }
    #head-image{
        flex:2;
    }
    #head-image img{
        width: 1rem;
        height: 1rem;
        border-radius: 0.5rem;
        margin: 0.25rem;
    }
    #information{
        flex:4;
        align-items:center; 
        display: -webkit-flex;
    }
    #more{
        flex:1;
        align-items:center; 
        display: -webkit-flex;
    }
    #photo{
        background: linear-gradient(to bottom,#204060, #d6d9e2);
        /* background: rgba(35,69,103,0.7); */
    }
    #photo>img{
        width: 44%;
        margin: 3%;
    }
</style>
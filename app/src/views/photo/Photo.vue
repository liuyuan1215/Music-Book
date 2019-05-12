<template>
    <div>
        <img v-for='(obj,index) in $store.state.photoData' :key='index' :src="obj.src" @click="goDetail(index)" alt=""/>
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        data() {
            return {
                
            }
        },
        created(){
            Axios.get('/data/photodata.json')
            .then((result)=>{
                //this.photo=[...result.data.photoData]; 
                this.$store.commit('addPhoto',result.data.photoData);
            })
        },
        methods:{
            goDetail(index){
                this.$router.push('/photodetail/'+index);
            }
        }
    }
</script>

<style scoped>
    img{
        width: 50%;
    }
</style>
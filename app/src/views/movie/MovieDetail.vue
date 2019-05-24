<template>
    <div>
        <!-- {{$route.params.id}} -->
        {{movie.title}}
        <!-- <img v-if='isShow' :src="movie.images.small"/> -->
        
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        data() {
            return {
                movie:{},
                isShow:false
            }
        },
        created(){
            Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/'+this.$route.params.id)
            .then((result)=>{
                this.movie = result.data;
                this.isShow = true;
                console.log(result);
            })
            .catch(()=>{

            })
        }
    }
</script>

<style scoped>

</style>
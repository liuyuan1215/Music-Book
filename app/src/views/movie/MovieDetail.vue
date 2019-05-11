<template>
    <div>
        {{$route.params.id}}
        {{movie.title}}
        <img :src="movie.images.medium"/>
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        data() {
            return {
                movie:{}
            }
        },
        created(){
            Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/'+this.$route.params.id)
            .then((result)=>{
                this.movie = result.data;
            })
            .catch(()=>{

            })
        }
    }
</script>

<style lscoped>

</style>
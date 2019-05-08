<template>
    <div>
        {{movieDetail.images.small}}
        {{$router.params.movieId}}
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        created(){
            // Axios.get(`https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/${this.$route.params.movieId}`)
            Axios.get(`/data/movie0.json/${this.$route.params.movieId}`)
            .then((result)=>{
                this.movieDetail = result.data;
            })
            .catch(()=>{

            })
        }
    }
</script>

<style lscoped>

</style>
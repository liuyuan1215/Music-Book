<template>
    <div>
        <!-- {{$route.params.index}} -->
        <!-- {{photos[$route.params.index]}} -->
        <router-link to="/photo">
            <v-touch v-on:swipeleft='next()' class='bg' :style="{backgroundImage:'url('+photos[iNow].src+')'}"></v-touch>
        </router-link>   
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Vue from 'vue';
    import VueTouch from 'vue-touch';
    Vue.use(VueTouch,{name:'v-touch'});
    export default {
        data () {
            return {
                iNow:this.$route.params.index
            }
        },
        computed: {
            ...mapState(['photos'])
        },
        methods:{
            next(){
                this.iNow++;
                // if(iNow==$route.params.index.length){
                //     iNow=0;
                // }
            }
        }
    }
</script>

<style scoped>
    .bg{
        position: absolute;
        top: 1rem;
        left: 0;
        right: 0;
        bottom: 1rem;
        background: #000 no-repeat center;
        background-size: contain;
    }
</style>
<template>
    <div>
        <router-link to="/three">
             <v-touch v-on:swipeleft='next()' v-on:swiperight='prev()' class='bg' :style="{backgroundImage:'url('+url+')'}"></v-touch>
        </router-link>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueTouch from 'vue-touch';
    Vue.use(VueTouch,{name:'v-touch'});
    export default {
        data () {
            return {
                iNow:this.$route.params.index
            }
        },
        computed:{
            url(){
                return this.$store.state.photoData[this.iNow].src
            }
        },
        methods:{
            next(){
                this.iNow++;
                if(this.iNow==this.$store.state.photoData.length){
                    this.iNow=0;
                }
            },
            prev(){
                this.iNow--;
                if(this.iNow==-1){
                    this.iNow=this.$store.state.photoData.length-1;
                }
            }
        }
    }
</script>

<style>
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
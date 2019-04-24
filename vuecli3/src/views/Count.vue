<template>
    <div>
        <!-- {{$store.state.count}} -->

        {{count}}
        <br>
        {{msg}}
        <br>
        {{num}}
        <br>
        {{xx}}
        <br>
        <button @click='add(5)'>+++</button>
        <!-- <button @click='$store.commit("reduce",2)'>---</button> -->
        <button @click='reduce(2)'>---</button>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters} from 'vuex';
    export default {
        computed:{
            // count(){
            //     return this.$store.state.count;
            // }
            ...mapState(['count','msg']),
            ...mapGetters(['num','xx'])
        },
        methods:{
            show(){
                console.log(this.$store.state.count);
            },
            fn(num){
                this.$store.commit('add',num);
            },
            ...mapMutations(['add','reduce'])
        }
    }
</script>

<style lang="scss" scoped>

</style>
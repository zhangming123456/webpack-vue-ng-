<template>
    <div>
        {{message}}
        <img src="../../../statics/images/cefc1e178a82b90145a20433718da9773912efa7.jpg" alt="">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                message: 'home'
            }
        },
        created(){
            this.handleSelect(1);
        },
        methods: {
            handleSelect(key){
                console.log(key);
            },
            fn: () => {
                console.log(12);
            }
        }
    }
</script>

<style>
    h1 {
        transform: translate(10px);
    }
</style>
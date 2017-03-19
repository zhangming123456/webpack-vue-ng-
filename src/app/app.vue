<template>
    <div>
        {{message}}
        <router-link to="/home">home</router-link>
        <router-link to="/main">main</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                message: '123'
            }
        }
    }
</script>
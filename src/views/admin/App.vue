<template>
    <div id="app">
        <admin-head></admin-head>
        <router-view></router-view>
        <p>登陆状态:{{is}}</p>
        <button @click="login">切换状态</button>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data(){
            return {
                isActive: true, hasError: true
            }
        },
        computed: {
            is: function () {
                return this.$store.state.user.log;
            }
        },
        methods:{
            login:function () {
                let state=this.$store.state.user.log;
                if(state){
                    this.$store.commit('logout');
                }else{
                    this.$store.commit('login');
                }
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    body {
        padding: 0;
        margin: 0;
    }
</style>

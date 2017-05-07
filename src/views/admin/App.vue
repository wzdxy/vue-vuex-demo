<template>
    <div id="app">
        <admin-head></admin-head>
        <router-view></router-view>
        <div style='border:2px solid;margin:20px;padding:20px'>
            <h3>登陆状态:{{isLogin}}</h3>
            <h3>登陆状态:{{isLogin2}}</h3>
            <button @click="login">切换状态</button>
        </div>
        
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
            isLogin: function () {
                return this.$store.state.log;
            },
            isLogin2: function () {
                return this.$store.state.user.log;
            }
        },
        methods:{
            login:function () {
                let state=this.$store.state.log;
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

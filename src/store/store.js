/**
 * Created by Z on 2017/4/29.
 */
import Vue from 'Vue'
import Vuex from 'Vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        count: 0,
        user: {
            id: 'admin',
            log:'我是初始状态, 请点击切换按钮'
        },
    },
    mutations: {
        login(state, action){
            state.user = {
                id:'admin',
                log:true
            };
        },
        logout(state){
            state.user = {
                id:'admin',
                log:false
            };
        },
    }
})

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
            log:'我是初始状态state.user.log , 请点击切换按钮'
        },
        log:'初始化我是初始状态state.log , 请点击切换按钮',
    },
    mutations: {
        login(state, action){
            state.log=true;
            state.user = {
                id:'admin',
                log:true
            };
        },
        logout(state){
            state.log=false;
            state.user = {
                id:'admin',
                log:false
            };
        },
    }
})

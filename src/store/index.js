import Vuex from 'vuex'
import Vue from 'vue'
import smsSimpleModule from './modules/smsSimpleModule'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        smsSimpleModule
    }
})
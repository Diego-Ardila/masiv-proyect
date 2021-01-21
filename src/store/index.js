import Vuex from 'vuex'
import Vue from 'vue'
import moduleSmsSimple from './modules/moduleSmsSimple'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        moduleSmsSimple
    }
})
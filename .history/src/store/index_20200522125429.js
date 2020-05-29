import Vue from 'vue'
import Vuex from 'vuex'

import getter from './getter'

import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
    getter,
    modules:{
        app
    }
})

export default store

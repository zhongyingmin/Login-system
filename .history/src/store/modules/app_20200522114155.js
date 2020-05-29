import Cookies from 'js-cookie'

const app = {
    state: {
        phone_type: 'desktop'
    },
    mutations: {
        SET_PHONE_TYPE: (state, token) => {
            state.token = token
        },
    },
    actions: {

        // pc or mobile
        setPhone_type({ commit }, type) {
            commit('SET_PHONE_TYPE', type)
        }

    }
}

export default app

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

    }
}

export default app

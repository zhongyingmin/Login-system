import Cookies from 'js-cookie'

const app = {
    state: {
        phone_type: Cookies.get('phone_type')
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

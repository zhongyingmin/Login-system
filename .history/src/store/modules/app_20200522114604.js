import Cookies from 'js-cookie'

const app = {
    state: {
        phone_type: Cookies.get('phone_type')
    },
    mutations: {
        SET_PHONE_TYPE: (state, value) => {
            Cookies.set('phone_type', value)
            state.phone_type = value
        },
    },
    actions: {

    }
}

export default app

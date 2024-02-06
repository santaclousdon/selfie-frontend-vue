export const state = () => ({
    userInfo: {
        emailStatue: false,
        filledStatue: false
    }
})

export const mutations = {
    setUserInfo(state, data) {
        state.auth.user = data
    }
}

export const actions = {}

export const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn; // auth object as default will be added in vuex state, when you initialize nuxt auth
    },
    getUserInfo(state) {
        return state.auth.user;
    }
};

import { axios } from "~/nuxt.config"

export const state = () => ({
    paymentInfo: {
        status: ''
    },
    IDInfo: {
        status: ' '
    }
})

export const mutations = {
    setUserInfo(state, data) {
        state.auth.user = data
    },
    resetUserInfo(state, data) {
        state.auth.user.email = data.email
        state.auth.user.password = data.password
    },
    setPaymentInfo(state, data) {
        state.paymentInfo.status = data
    }
}

export const actions = { }

export const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn; // auth object as default will be added in vuex state, when you initialize nuxt auth
    },
    getUserInfo(state) {
        return state.auth.user;
    },
    getPaymentInfo(state) {
        return state.paymentInfo;
    },
    getIDInfo(state) {
        return state.IDInfo;
    }
};

module.exports = {
    isLoggedIn: (state) => {
        return state.isLoggedIn
    },
    userToken: (state) => {
        return state.token
    },
    getUser: (state) => {
        return state.user
    }
}
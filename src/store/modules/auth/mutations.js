module.exports = {
    SET_LOGIN_STATUS: (state, status) => {
        return state.isLoggedIn = status
    },
    SET_USER_ID: (state, user_id) => {
        return state.user_id = user_id
    },
    SET_ACCESS_TOKEN: (state, tok) => {
        return state.token = tok
    },
    SET_ACTIVE_USER: (state, user) => {
        return state.user = user
    }
}
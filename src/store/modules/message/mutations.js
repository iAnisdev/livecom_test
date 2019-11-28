module.exports = {
    SET_CHAT_MESSAGES: (state, messages) => {
        return state.chatMessages = messages
    },
    UPDATE_CHAT_MESSAGES: (state, message) => {
        let chatMessages = state.chatMessages
        chatMessages.push(message)
        state.chatMessages = chatMessages
    },
}
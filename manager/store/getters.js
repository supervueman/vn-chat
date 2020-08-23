const getters = {
  get(state) {
    return state.chat;
  },
  getAll(state) {
    return state.chats;
  }
};

export default getters;

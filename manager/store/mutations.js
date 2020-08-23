const mutations = {
  SET(state, payload) {
    state.chat = payload;
  },
  SET_ALL(state, payload) {
    state.chats = payload;
  }
};

export default mutations;

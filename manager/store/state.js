import chat from '../models/chat.json';

const state = {
  chat: {
    ...chat
  },
  chats: [],
  messages: [],
  selectedChat: {}
};

export default state;

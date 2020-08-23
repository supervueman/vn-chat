const Model = require('../model/chat');
const Message = require('../model/message');
const Context = require('../../../core/modules/context/model');
const User = require('../../../core/modules/user/model');

module.exports = () => {
  Model.belongsTo(Context, {
    onDelete: 'cascade'
  });

  Model.belongsToMany(User, {
    as: 'users',
    through: 'ChatUser'
  });

  User.hasMany(Model, {
    as: 'chats',
    onDelete: 'cascade'
  });

  Message.belongsTo(Model, {
    as: 'chat'
  });

  Model.hasMany(Message, {
    as: 'messages',
    onDelete: 'cascade'
  });
};

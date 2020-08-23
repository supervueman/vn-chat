const socket = require('socket.io');
// Data
const enLexicons = require('../data/en.json');
const ruLexicons = require('../data/ru.json');
// New rules
const newRulesAdmin = require('../data/rules_admin.json');
const newRulesManager = require('../data/rules_manager.json');
const newRulesDefault = require('../data/rules_default.json');

// Helpers
const createLexicons = require('../../../core/modules/lexicon/helpers/createLexicons');
const addNewRules = require('../../../core/modules/role/handlers/addNewRules');

module.exports = async (server) => {
  await createLexicons('ru', ruLexicons);
  await createLexicons('en', enLexicons);
  await addNewRules('default', newRulesDefault, 'Default', 0);
  await addNewRules('admin', newRulesAdmin, 'Admin', 9999);
  await addNewRules('manager', newRulesManager, 'Manager', 9000);

  const io = socket(server);

  io.origins(process.env.CORS_ACCESS_URL.split(', '));

  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};

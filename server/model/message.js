const Sequelize = require('sequelize');
const sequelize = require('../../../core/db');

/**
 * @swagger
 *
 * components:
 *   schemas:
 *     Message:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         title:
 *           type: string
 *         chatId:
 *           type: number
 *           description: Association name chat
 *       example:
 *         title: ...
 *         chatId: 1
 */

const Model = sequelize.define('message', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  content: {
    type: Sequelize.STRING(1000),
    allowNull: true,
    notEmpty: false
	},
	attachment: {
		type: Sequelize.TEXT
	}
});

module.exports = Model;

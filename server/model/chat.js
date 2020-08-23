const Sequelize = require('sequelize');
const sequelize = require('../../../core/db');

/**
 * @swagger
 *
 * components:
 *   schemas:
 *     Chat:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         title:
 *           type: string
 *         contextId:
 *           type: number
 *           description: Association name context
 *       example:
 *         title: ...
 *         conextId: 1
 */

const Model = sequelize.define('chat', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.TEXT,
    allowNull: true,
    notEmpty: false
  },
});

module.exports = Model;

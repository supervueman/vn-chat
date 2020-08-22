const express = require('express');
const router = express.Router();

// Controllers
const controller = require('../controller');

// Middleware
const profileByAccessToken = require('../../../middleware/profileByAccessToken');
const profileByApiKey = require('../../../middleware/profileByApiKey');

/**
 * @swagger
 * tags:
 *   name: PushNotifications
 *   description: Push notifications management
 */

/**
 * @swagger
 * path:
 *  /push-notifications/subscribe:
 *    post:
 *      summary: Subscribe to push notifications
 *      tags: [PushNotifications]
 *      parameters:
 *        - in: header
 *          name: x-api-key
 *          required: true
 *          schema:
 *            type: string
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/PushSubscribe'
 *      responses:
 *        "200":
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *      security:
 *        - basicAuth: []
 */
// router.post('/chat', profileByApiKey);

// router.get('/socket.io', () => {
//   console.log('Connection');
//   res.status(200).send({ message: 'Socket installed' });
// });

module.exports = router;

const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /healthcheck:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
router.get("/healthcheck", (req, res) => res.sendStatus(200));
module.exports = router;

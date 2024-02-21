var express = require('express');
var router = express.Router();

const {
    getWebhook,
    createWebhook,
    setupProfile
  } = require("./controller");

router.route("/")
  .get(getWebhook)
  .post(createWebhook)

router.route("/setup-profile")
  .post(setupProfile);

module.exports = router;

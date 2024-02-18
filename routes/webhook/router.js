var express = require('express');
var router = express.Router();

const {
    getWebhook,
    createWebhook,
  } = require("./controller");

router.route("/")
  .get(getWebhook)
  .post(createWebhook);

module.exports = router;

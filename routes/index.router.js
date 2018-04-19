var express = require('express');

const indexRouter = (repo) => {
  var router = express.Router();

  /* GET home page. */
  router.get('/', function(req, res) {
    res.json({
      message: "Service is working.",
      version: req.app.get('buildVersion')
    });
  });

  return router;
}

const init = (repo) => {
  return indexRouter(repo);
}

module.exports = {init};
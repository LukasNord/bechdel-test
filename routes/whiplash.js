var express = require('express');
var router = express.Router();

/* GET films listing. */
router.get('/', function(req, res, next) {
  res.render('whiplash', {
    title : 'Bechdel Test Visualizer'
  });

});

module.exports = router;
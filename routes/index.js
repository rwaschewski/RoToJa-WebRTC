var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RoToJa' });
});

router.get('/room/:id', function(req, res, next) {
  res.render('room', {output: req.params.id, title: 'RoToJa' });
});

module.exports = router;

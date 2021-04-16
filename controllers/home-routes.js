//this file will contain al of the user-facing routes, ex:
//homepage and login
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;
const { welcomeController,createToken } = require('../controllers/basicController');

const router = require('express').Router();

router.route('/').get(welcomeController)
router.route('/createToken').post(createToken)

module.exports = router
const { Router } = require("express")
const router = Router();
const { findData } = require('../controllers/User.js')


//all func start with /user
router.get('/', findData)

module.exports = router
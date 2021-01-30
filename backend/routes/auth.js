const express = require('express'); 
const {
    signupController,
    signinController,
    currentUser
} = require('../controllers/authController');
// Hoan
const {
    loadEventController, loadEventControllerById
} = require('../controllers/eventController');
//Hoan

const { validate } = require('../validators')
const { rules: registrationRules } = require('../validators/auth/register')
const { rules: loginRules } = require('../validators/auth/login')


const { auth } = require('../middlewares/auth')
const router = express.Router();

//Hoan comment

// router.post('/signup', [registrationRules, validate], signupController)
// router.get('api/currentuser',auth,currentUser);

// router.post('/signin', [loginRules, validate], signinController)

// // router.post('/', loadEventController)
// router.get('/events', loadEventController)

// router.get('api/events/:id',loadEventControllerById)

//Hoan comment

module.exports = router; 
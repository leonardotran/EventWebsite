var express = require('express')
  , http = require('http')
  , app = express()
  , server = http.createServer(app);

require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser'); 
const connectDatabase = require('./config/database');
const authRoute = require('./routes/auth');
// const app = express();


app.use(cors()); 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true})); 
app.use(authRoute);
connectDatabase(); 

// Hoan
const {
  loadEventController, loadEventControllerById
} = require('../backend/controllers/eventController');

const {
  loadRankingController, loadRankingControllerById
} = require('../backend/controllers/rankingController');
//Hoan

var port = process.env.PORT || 7000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();             

//Hoan

router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); 
});


app.use('/api', router);
router.route('/events').get(loadEventController);
router.route('/events/:id').get(loadEventControllerById);

router.route('/ranking').get(loadRankingController);
router.route('/ranking/:id').get(loadRankingControllerById);


// User
const {
  signupController,
  signinController,
  currentUser
} = require('../backend/controllers/authController');

const { validate } = require('../backend/validators')
const { rules: registrationRules } = require('../backend/validators/auth/register')
const { rules: loginRules } = require('../backend/validators/auth/login')
const { auth } = require('../backend/middlewares/auth')

router.route('/signup').post([registrationRules, validate], signupController);
router.route('/currentuser').get(auth,currentUser);
router.route('/signin').post([loginRules, validate], signinController)




// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
/*
* 'require' is similar to import used in Java and Python. It brings in the libraries required to be used
* in this JS file.
* */
const express = require('express');
const session = require('express-session');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const FlashMessenger = require('flash-messenger');// Library to use MySQL to store session objects
const MySQLStore = require('express-mysql-session');
const smartlivingDB = require('./config/DBConnection');
const db = require('./config/db'); // db.js config file
const passport = require('passport'); 
const fileUpload = require('express-fileupload');
const fs = require('fs');

/*
* Loads routes file main.js in routes directory. The main.js determines which function
* will be called based on the HTTP request and URL.
*/
const mainRoute = require('./routes/main');
const userRoute = require('./routes/user');
const profileroute = require('./Routes/profile');
const lightroute = require('./Routes/LightsDate1');
const controlRoute = require('./Routes/Ccontrol');
const timeRoute = require('./Routes/Ctimed');
const cctvroute = require('./routes/cctv');
const airconRoute = require('./Routes/aircon2');

smartlivingDB.setUpDB(false);
/*
* Creates an Express server - Express is a web application framework for creating web applications
* in Node JS.
*/
const app = express();

app.use(fileUpload());

app.post('/upload', function(req, res) {  
	if (TypeError) {
		return res.status(400).send('No files were uploaded.');
	}
	
	// The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
	let videoFootage = req.files.videoFootage;

	// Use the mv() method to place the file somewhere on your server
	videoFootage.mv('public/videoFiles/videoFootage.mp4', function(err) {		
		if (err)
			return res.status(500).send(err);
  
	  	res.redirect('/cctv/cctv');
	});
});

app.get('/video', function(req, res) {
	const path = 'public/videoFiles/videoFootage.mp4'
	const stat = fs.statSync(path)
	const fileSize = stat.size
	const range = req.headers.range
	if (range) {
	  const parts = range.replace(/bytes=/, "").split("-")
	  const start = parseInt(parts[0], 10)
	  const end = parts[1] 
		? parseInt(parts[1], 10)
		: fileSize-1
	  const chunksize = (end-start)+1
	  const file = fs.createReadStream(path, {start, end})
	  const head = {
		'Content-Range': `bytes ${start}-${end}/${fileSize}`,
		'Accept-Ranges': 'bytes',
		'Content-Length': chunksize,
		'Content-Type': 'video/mp4',
	  }
	  res.writeHead(206, head);
	  file.pipe(res);
	} else {
	  const head = {
		'Content-Length': fileSize,
		'Content-Type': 'video/mp4',
	  }
	  res.writeHead(200, head)
	  fs.createReadStream(path).pipe(res)
	}
});
// Handlebars Middleware
/*
* 1. Handlebars is a front-end web templating engine that helps to create dynamic web pages using variables
* from Node JS.
*
* 2. Node JS will look at Handlebars files under the views directory
*
* 3. 'defaultLayout' specifies the main.handlebars file under views/layouts as the main template
*
* */
app.engine('handlebars', exphbs({
	defaultLayout: 'main', // Specify default template views/layout/main.handlebar 
	partialsDir: path.join(__dirname, 'views/partials'),
	layoutsDir: path.join(__dirname, 'views/layout'),
}));
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname,'views'))


// Body parser middleware to parse HTTP body in order to read HTTP data
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

// Creates static folder for publicly accessible HTML, CSS and Javascript files
app.use(express.static(path.join(__dirname, 'public')));

// Method override middleware to use other HTTP methods such as PUT and DELETE
app.use(methodOverride('_method'));

// Enables session to be stored using browser's Cookie ID
app.use(cookieParser());

// To store session information. By default it is stored as a cookie on browser
app.use(session({
	key: 'vidjot_session',
	secret: 'tojiv',
	resave: false,
	saveUninitialized: false,
}));

// Initilize Passport middleware
app.use(passport.initialize());
app.use(passport.session());


app.use(flash());

app.use(FlashMessenger.middleware); // add this statement after flash()
app.use(function (req, res, next) {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	res.locals.user = req.user || null;
	next();
});
// Place to define global variables - not used in practical 1
/* app.use(function (req, res, next) {
	next();
});
*/
// Use Routes
/*
* Defines that any root URL with '/' that Node JS receives request from, for eg. http://localhost:5000/, will be handled by
* mainRoute which was defined earlier to point to routes/main.js
* */
app.use('/', mainRoute); // mainRoute is declared to point to routes/main.js
// This route maps the root URL to any path defined in main.js
app.use('/user', userRoute); // mainRoute is declared to point to routes/main.js
//
app.use('/profile', profileroute);

app.use('/Light2',lightroute);

app.use('/cctv', cctvroute);

app.use('/Ctimed',timeRoute);

app.use('/cControl', controlRoute);

app.use('/aircon', airconRoute);

/*
* Creates a unknown port 5000 for express server since we don't want our app to clash with well known
* ports such as 80 or 8080.
* */
const port = 5000;

// Starts the server and listen to port 5000
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

// Passport Config
const authenticate = require('./config/passport');
authenticate.localStrategy(passport);
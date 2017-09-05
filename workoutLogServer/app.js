var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db.js');
var User = sequelize.import('./models/user');

User.sync(); // sync({force:true}) WARNING: This will drop the table!
app.use(bodyParser.json());

app.use(require('./middleware/headers'));

app.use('/api/test', function(req, res){
	res.send("Hello World");
});

app.listen(3000, function(){
	console.log("app is open on 3000");
})

// Creates the table in postgres
// Matches the defined model
// Doesn't drop the db

app.post('/api/user', function(req, res) {
		// When we post to API user, it will want a user object in the body 
	var username = req.body.user.username;
	var pass = req.body.user.password; //TO DO: Hash this password

		// Match the model we create above
		// Sequelize - take the user model and go out to the db and create this:
	User.create({
		username: username,
		passwordhash: ""
	}).then(
			// Sequelize is going to return the object it created from db.
		function createSuccess(user){
				// If successful, get this:
			res.json({
				user: user,
				message: 'create'
			})
		},
		function createError(err){
			res.send(500, err.message);
		}
	);
});
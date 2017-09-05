var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(require('./middleware/headers'));

app.use('/api/test', function(req, res){
	res.send("Hello World");
});

var Sequelize = require('sequelize');
var sequelize = new Sequelize('workoutlog', 'postgres', '100%Cool!', {
	host: 'localhost',
	dialect: 'postgres'
});

sequelize.authenticate().then(
	function() {
		console.log('connected to workoutlog postgres db');
	},
	function(err){
		console.log(err);
	}
);

app.listen(3000, function(){
	console.log("app is open on 3000");
})

	var User = sequelize.define('user', {
		username: Sequelize.STRING,
		passwordhash: Sequelize.STRING
	});

// Creates the table in postgres
// Matches the defined model
// Doesn't drop the db

	// User.sync();
	User.sync({force:true}); //This drops the table

	app.use(bodyParser.json());

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
// user model created using sequelize
// talks to the table user

var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
	var User = sequelize.define('user', {
		username: Sequelize.STRING,
		passwordhash: Sequelize.STRING
	});
	return User;
};

module.exports = function(sequelize, DataTypes){
	return sequelize.define('user', {
		username: DataTypes.STRING,
		passwordhash: DataTypes.STRING
	});
};
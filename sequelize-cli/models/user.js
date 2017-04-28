module.exports = function(sequelize, dataTypes) {
	var User = sequelize.define("User", {
		email: dataTypes.STRING,
		password: dataTypes.STRING
	});
	return User;
};
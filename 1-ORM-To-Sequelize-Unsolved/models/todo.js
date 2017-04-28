module.exports = function(sequelize, dataTypes) {
	var Todo = sequelize.define("Todo", {
		text: dataTypes.STRING,
		complete: dataTypes.BOOLEAN
	});
	return Todo;
};
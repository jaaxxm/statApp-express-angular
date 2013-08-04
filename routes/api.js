/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  res.json({
  	name: 'Jason'
  });
};

/**
 * MySQL
 */
var Sequelize = require('sequelize-mysql').sequelize;

var sequelize = new Sequelize('calls', 'root', null, {
  // mysql is the default dialect, but you know...
  // for demo purporses we are defining it nevertheless :)
  // so: we want mysql!
  dialect: 'mysql',

 // custom host; default: localhost
  host: 'localhost',

  // custom port; default: 3306
  port: 3306  
});

// Quick example
// sequelize.query("SELECT * FROM stat").success(function(myTableRows) {
//   console.log(myTableRows)
// });

var MainStat = sequelize.define('MainStat', {
	provider: {type: Sequelize.STRING(20)}, 
	dialStatus: {type: Sequelize.STRING(25)}, 
	duration: {type: Sequelize.INTEGER(5)}
});
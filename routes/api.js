/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  res.json({
  	name: 'Jason'
  });
};

// Quick example
// sequelize.query("SELECT * FROM stat").success(function(myTableRows) {
//   console.log(myTableRows)
// });
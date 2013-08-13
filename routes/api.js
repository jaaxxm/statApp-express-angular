/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  res.json({
  	name: 'Jason'
  });
};

exports.mainStat = function (req, res) {
  res.json(AllStat);
};
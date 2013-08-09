// Main Stat

module.exports = function(sequelize) {
  return sequelize.query("SELECT COUNT( * ) AS  `all-calls` ,  `city` FROM  `stat` GROUP BY  `city` ORDER BY  `all-calls`").
	success(function(rows) {
    MainStat = rows
  });
};
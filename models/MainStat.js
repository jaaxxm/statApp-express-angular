// Main Stat

module.exports = function(sequelize, callPeriod, callStatus) { 
  return sequelize.query(
  	"SELECT `city`, `start`, `dialstatus`, `sec` " + 
  	"FROM `stat` " + 
  	"WHERE (`start` > DATE_SUB(NOW(), INTERVAL 1 "+ "MONTH" +")) " + 
  	// "AND (`dialstatus` = '"+ "ANSWER" +"')" + 
  	"ORDER BY `start` DESC"
  ).
	success(function(rows) {
    AllStat = rows
  });
};


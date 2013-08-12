// Main Stat

// module.exports = function(sequelize) {  
//   return sequelize.query(
//   	"SELECT COUNT( * ) AS `all-calls`, `city` " + 
//   	"FROM `stat` " + 
//   	"WHERE start > DATE_SUB(NOW(), INTERVAL 1 MONTH) " + 
//   	"GROUP BY `city` " + 
//   	"ORDER BY `all-calls` DESC"
//   ).
// 	success(function(rows) {
//     MainStat = rows
//   });
// };

module.exports = function(sequelize, async) {
  return {    
    sequelize.define('MainStat', {
      tablename: 'stat'
    }), 
    async.auto([
        MainStat.findAll(city).complete(next)
    ], function(err, results) {
        IndexStat = results
    });
  }   
};

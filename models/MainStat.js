module.exports = function(sequelize) {
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('MainStat', {
//     provider: DataTypes.STRING(20), 
//     duration: DataTypes.INTEGER(5)
//   });
  return sequelize.query("SELECT * FROM stat").success(function(myTableRows) {
    console.log(myTableRows)
  });
};

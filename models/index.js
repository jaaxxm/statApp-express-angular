var Sequelize = require('sequelize');
var sequelize = new Sequelize('calls', 'root', null, {
 // custom host; default: localhost
  host: 'localhost',
  // custom port; default: 3306
  port: 3306  
});

// load models
var models = [
  'MainStat'
];
models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// // describe relationships
// (function(m) {
//   m.PhoneNumber.belongsTo(m.User);
//   m.Task.belongsTo(m.User);
//   m.User.hasMany(m.Task);
//   m.User.hasMany(m.PhoneNumber);
// })(module.exports);

// export connection
module.exports.sequelize = sequelize;
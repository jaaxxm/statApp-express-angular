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

// export connection
module.exports.sequelize = sequelize;

module.exports = function (app) {

  var apiHandlers = require('../controllers/apiController.js');
  
  app.route('/circulating')
     .get(apiHandlers.getCirculating);

};
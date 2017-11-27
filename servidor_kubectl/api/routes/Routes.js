module.exports = function (app) {
  var Test = require('../controllers/Test');

  app.route('/getService')
    .get(Test.test)

  app.route('/adduser')
    .post(Test.adduser)

  app.route('/createService')
    .post(Test.addDeployent)

  app.route('/deleteService')
    .post(Test.deleteDeployment)
};

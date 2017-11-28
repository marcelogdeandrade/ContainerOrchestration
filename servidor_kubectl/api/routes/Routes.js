module.exports = function (app) {
  var Controller = require('../controllers/Controller');

  app.route('/getService')
    .get(Controller.getDeployment)

  app.route('/adduser')
    .post(Controller.adduser)

  app.route('/createService')
    .post(Controller.addDeployent)

  app.route('/deleteService')
    .post(Controller.deleteDeployment)
};

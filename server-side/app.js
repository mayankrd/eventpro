module.exports = function(app) {

 var models = require('./model/model.server')();
 require('./services/user.services')(app, models.userModel);

}

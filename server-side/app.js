module.exports = function(app) {

 var models = require('./model/model.server')();
 require('./services/user.services')(app, models.userModel);
 require('./services/event.services')(app,models.eventModel);
 require('./services/category.services')(app,models.categoryModel);

}

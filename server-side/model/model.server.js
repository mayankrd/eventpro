module.exports = function () {

  var userModel = require("./user/user.model.server")();
  var eventModel = require("./events/event.model.services")();
  var categoryModel = require("./category/category.model.services")();
  
  var model = {
    userModel: userModel,
    eventModel:eventModel,
    categoryModel:categoryModel
   };

  userModel.setModel(model);
  eventModel.setModel(model);
  categoryModel.setModel(model);

  return model;
};

module.exports = function () {

  var userModel = require("./user/user.model.server")();
  var eventModel = require("./events/event.model.services")();

  var model = {
    userModel: userModel,
    eventModel:eventModel,
   };

  userModel.setModel(model);
  eventModel.setModel(model);

  return model;
};

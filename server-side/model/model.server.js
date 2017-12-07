module.exports = function () {

  var userModel       = require("./user/user.model.server")();
  
  var model = {
    userModel: userModel,
   };

  userModel.setModel(model);
  
  return model;
};

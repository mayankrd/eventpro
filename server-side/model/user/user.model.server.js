module.exports = function () {

  var model = null;
  var mongoose = require('mongoose');
  var UserSchema = require('./user.schema.server')();
  var UserModel = mongoose.model('UserModel', UserSchema);

  var api = {
    createUser: createUser,
    findUserById: findUserById,
    findUserByUsername: findUserByUsername,
    findUserByCredentials: findUserByCredentials,
    findAllUsers:findAllUsers,
    updateUser: updateUser,
    deleteUser:deleteUser,
    setModel: setModel
  };

  function findAllUsers(){
    console.log("Inside model findAllUsers");
    return UserModel.find();
  }
  function createUser(user) {
    return UserModel.create(user);
  }

  function findUserById(userId){
    return UserModel.findById(userId);
  }

  function findUserByUsername(username){
    return UserModel.find({"username": username});
  }

  function findUserByCredentials(username, password){
    return UserModel.find({"username": username, "password": password});
  }

  function updateUser(userId, newUser){
    return UserModel.update({_id:userId},{$set:newUser});
  }

  function deleteUser(userId){
    return UserModel.remove({_id: userId})
        .then(function (response) {
          return response;
        }, function (err) {
          return err;
        });
  }



  function setModel(_model) {
    model = _model;
  }

  return api;
};

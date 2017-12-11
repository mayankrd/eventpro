module.exports = function () {
  var mongoose = require('mongoose');
  var AddressSchema = require('../Address/AddressSchema.js')();
  var PhoneSchema = require('../Phone/PhoneSchema.js')();
  var EventSchema = require('../events/EventSchema.js')();
  var UserSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    address: [AddressSchema],
    phone: [PhoneSchema],
    events : [EventSchema],
    createdEvents:[EventSchema],
    type : String
    }, {collection: 'users'});

  return UserSchema;
};

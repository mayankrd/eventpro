module.exports = function () {
  var mongoose = require('mongoose');
  var AddressSchema = require('../Address/AddressSchema.js')();
  var PhoneSchema = require('../Phone/PhoneSchema.js')();
  var EventSchema = mongoose.Schema({
    eventname: String,
    eventdescription: String,
    location: AddressSchema,
    contact: [PhoneSchema]
  }, {collection: 'events'});

  return EventSchema;
};

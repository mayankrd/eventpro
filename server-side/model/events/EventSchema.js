module.exports = function () {
  var mongoose = require('mongoose');
  var AddressSchema = require('../Address/AddressSchema.js')();
  var PhoneSchema = require('../Phone/PhoneSchema.js')();
  var CategorySchema = require('../category/Category.schema.server')();
  var CommentSchema = require('../comments/commentSchema.js')();
  var EventSchema = mongoose.Schema({
    eventname: String,
    eventdescription: String,
    location: AddressSchema,
    contact: [PhoneSchema],
    Category : CategorySchema,
    users :[String],
    comments :[CommentSchema]
  }, {collection: 'events'});

  return EventSchema;
};

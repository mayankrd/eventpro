module.exports = function () {
  var mongoose = require('mongoose');
  var PhoneSchema = mongoose.Schema({
    phonenumber: String,
    isPrimary: Boolean 
  }, {collection: 'phone'});

  return PhoneSchema;
};

module.exports = function () {
  var mongoose = require('mongoose');
  var AddressSchema = mongoose.Schema({
    street1: String,
    street2: String,
    zipcode: String,
    country: String,
    state: String
  }, {collection: 'address'});

  return AddressSchema;
};

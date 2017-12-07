module.exports = function () {
  var mongoose = require('mongoose');
  var CategorySchema = mongoose.Schema({
    categoryname: String,
    description: String,
  }, {collection: 'category'});

  return CategorySchema;
};

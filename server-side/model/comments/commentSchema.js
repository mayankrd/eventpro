module.exports = function () {
  var mongoose = require('mongoose');
  var CommentSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    descriptionText : String
  }, {collection: 'comments'});

  return CommentSchema;
};

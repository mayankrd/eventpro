module.exports = function () {

  var model = null;
  var mongoose = require('mongoose');
  var CategorySchema = require('./Category.schema.server.js')();
  var categoryModel = mongoose.model('categoryModel', CategorySchema);

  var api = {
    createCategory: createCategory,
    findCategoryById:findCategoryById,
    updateCategory:updateCategory,
    getAllCategory:getAllCategory,
    deleteCategory:deleteCategory,
    setModel: setModel
  };

  function createCategory(category) {
    return categoryModel.create(category);
  }

  function findCategoryById(categoryId){
    return categoryModel.findById(categoryId);
  }

  function updateCategory(categoryId, newCategory){
    return categoryModel.update({_id:categoryId},{$set:newCategory});
  }

  function getAllCategory(){
    return categoryModel.find();
  }

  function deleteCategory(categoryId){
    return categoryModel.remove({_id:categoryId})
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
}

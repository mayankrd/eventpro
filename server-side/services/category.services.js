module.exports = function(app, categoryModel) {

app.post("/api/category", createCategory);
app.get("/api/category/:categoryId",findCategoryById);
app.put("/api/category/:categoryId",updateCategory);
app.get("/api/category/",getAllCategory);
app.delete("/api/category/:categoryId",deleteCategory);

function createCategory(req, res){
  var newCategory = req.body;
  console.log(newCategory);
  categoryModel
    .createCategory(newCategory)
    .then(function(category) {
      res.json(category);
    }, function (error) {
      res.sendStatus(500).send(error);
    });
}

function findCategoryById(req,res){
  var categoryId = req.params.categoryId;
  categoryModel
  .findCategoryById(categoryId)
  .then(function(category){
    res.json(category);
  },function(error){
      res.sendStatus(404).send(error);
  })
}

function updateCategory(req,res){
  console.log("yo");
  var categoryId = req.params.categoryId;
  var newCategory = req.body;

  categoryModel
    .updateCategory(categoryId,newCategory)
    .then(function(category) {
          res.json(category);
        },
        function (error) {
          res.sendStatus(404).send(error);

        })


}

function getAllCategory(req,res){
  console.log("Find All Events");
  categoryModel
  .getAllCategory()
  .then(function(category){
    res.json(category);
  },function(error){
    res.sendStatus(404).send(error);
  })
}

function deleteCategory(req,res){
  var categoryId = req.params.categoryId;
  categoryModel
  .deleteCategory(categoryId)
  .then(function(response){
    res.sendStatus(200);
  },function(error){
    res.sendStatus(404).send(error);
  })

}


}

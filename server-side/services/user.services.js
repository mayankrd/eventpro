module.exports = function(app, userModel) {

 app.post("/api/user/update", updateUser);
 app.post("/api/user", createUser);
 app.post("/api/login", findUser);
 app.get("/api/users/",findAllUsers);
 app.get("/api/user/:userId", findUserById);
 app.delete("/api/user/:userId", deleteUser);


  function createUser(req, res){
    var newUser = req.body;
    console.log(newUser);
    userModel
      .createUser(newUser)
      .then(function(user) {
        res.json(user);
      }, function (error) {
        res.sendStatus(500).send(error);
      });
  }

 function findUser(req, res) {
   var credentials = req.body;
    var username = credentials.username;
    var password = credentials.password;

   userModel
     .findUserByCredentials(username, password)
     .then(function(user){
       console.log(username, password);
       res.json(user[0]);
     });
  }

function findUserByCredentials(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    console.log(username, password);
    userModel
      .findUserByCredentials(username, password)
      .then(function(user){
        console.log(username, password);
        res.json(user[0]);
      });
  }

function findAllUsers(req,res){
  console.log("Find All Events");
  userModel
  .findAllUsers()
  .then(function(user){
    console.log("In findAllUsers");
    console.log(user);
    res.json(user);
  },function(error){
    res.sendStatus(404).send(error);
  })
}




function findUserById(req, res) {
    var userId = req.params.userId;

    userModel
      .findUserById(userId)
      .then(function(user){
        res.json(user);
      });
  }

  function deleteUser(req, res) {
  var userId = req.params.userId;

  userModel
    .deleteUser(userId)
    .then(function (response) {
      res.sendStatus(200);
    },function (err) {
      res.sendStatus(404);
    });
}

function updateUser(req, res) {
    //var userId = req.params.userId;

    var newUser = req.body;
    var userId = newUser._id;

    console.log(newUser);

    userModel
      .updateUser(userId, newUser)
      .then(function(user) {
          res.json(user);
        },
        function (error) {
          res.sendStatus(404).send(error);

        })
  }

}

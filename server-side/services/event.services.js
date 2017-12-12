module.exports = function(app, eventModel) {

app.post("/api/event", createEvent);
app.post("/api/event/update",updateEvent);
app.get("/api/event/:eventId",findEventById);
app.delete("/api/event/:eventId",deleteEvent);
app.get("/api/event/",findAllEvents);
function createEvent(req, res){
  var newEvent = req.body;
  //console.log(newEvent);
  eventModel
    .createEvent(newEvent)
    .then(function(event) {
      res.json(event);
    }, function (error) {
      res.sendStatus(500).send(error);
    });
}

function updateEvent(req, res) {
    //var eventId = req.params.eventId;
    var newEvent = req.body;
    var eventId = newEvent._id;

    eventModel
      .updateEvent(eventId,newEvent)
      .then(function(event) {
            res.json(event);
          },
          function (error) {
            res.sendStatus(404).send(error);

          })
  }

  function findEventById(req,res){
    var eventId = req.params.eventId;
    eventModel
    .findEventById(eventId)
    .then(function(event){
      res.json(event);
    },function(error){
        res.sendStatus(404).send(error);
    })
  }

  function deleteEvent(req,res){
    var eventId = req.params.eventId;
    eventModel
    .deleteEvent(eventId)
    .then(function(response){
      res.sendStatus(200);
    },function(error){
      res.sendStatus(404).send(error);
    })

  }

  function findAllEvents(req,res){
   // console.log("Find All Events");
    eventModel
    .findAllEvents()
    .then(function(event){
      res.json(event);
    },function(error){
      res.sendStatus(404).send(error);
    })
  }


}

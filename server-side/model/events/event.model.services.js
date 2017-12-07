module.exports = function () {

  var model = null;
  var mongoose = require('mongoose');
  var EventSchema = require('./EventSchema.js')();
  var eventModel = mongoose.model('eventModel', EventSchema);

  var api = {
    createEvent: createEvent,
    updateEvent: updateEvent,
    findEventById:findEventById,
    deleteEvent:deleteEvent,
    findAllEvents:findAllEvents,
    setModel: setModel
  };

  function createEvent(event) {
    return eventModel.create(event);
  }

  function updateEvent(eventId, newEvent){
    return eventModel.update({_id:eventId},{$set:newEvent});
  }

  function findEventById(eventId){
    return eventModel.findById(eventId);
  }

  function deleteEvent(eventId){
    return eventModel.remove({_id:eventId})
    .then(function (response) {
      return response;
    }, function (err) {
      return err;
    });
  }

  function findAllEvents(){
    console.log("Inside model findAllEvents");
    return eventModel.find();
  }

  function setModel(_model) {
    model = _model;
  }

  return api;
}

/**
 * Created by mayankrd on 12/2/17.
 */

const express = require('express');
const path = require('path');
const http = require('http');

const bodyParser = require('body-parser');
const app = express();
var cookieParser = require('cookie-parser');
var session      = require('express-session');

var passport = require('passport');
 var cors = require('cors');
 app.use(cors({credentials: true, origin: 'http://localhost:4200'}));

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));


app.use(cookieParser());
app.use(session({ secret: "cats" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(passport.initialize());
app.use(passport.session());

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});


const port = process.env.PORT || '3100';
app.set('port', port);

require("./server/app.js")(app);


const server = http.createServer(app);

var serverSide = require("./server/test-mongodb/app");
serverSide(app);


app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


server.listen( port , () => console.log('Running'));


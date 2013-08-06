/**
 * Main application
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  //, appstore = require('./appstore')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var options = {};

routes(app, options);

/*
// require models
fs
  .readdirSync('./mobile-apps')
  .filter(function (m) {
    return path.extname(m) === '.js';
  })
  .forEach(function (m) {
    // expose model over rest
    //app.model(require('./models/' + m));
  });
function (args) {
	
}
*/

http.createServer(app).listen(app.get('port'), function(){
  console.log("appstore-nodejs-server listening on port " + app.get('port'));
});


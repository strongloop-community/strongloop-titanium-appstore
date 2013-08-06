/*
 * GET home page.
 */

function index(req, res){
  res.render('index', {
	title: 'appstore-nodejs-server',
	message: 'my message',
	appListing : ['app1','app2','app3' ]
	});
};

/**
 * Set up routes
 */

//Set up routes
var dataStorePublicApps = require('./publicapps');
var dataStorePrivateApps = require('./privateapps');
 
module.exports = function(app, options) {
  app.get('/', index);
  
  app.get('/json/privateApps/:id', dataStorePrivateApps.findById);
  app.get('/json/privateApps', dataStorePrivateApps.findAll);

  app.get('/json/publicApps/:id', dataStorePublicApps.findById);
  app.get('/json/publicApps', dataStorePublicApps.findAll);

  app.get('/json/SandboxApps/:id', dataStorePrivateApps.findById);
  app.get('/json/SandboxApps', dataStorePrivateApps.findAll);

}

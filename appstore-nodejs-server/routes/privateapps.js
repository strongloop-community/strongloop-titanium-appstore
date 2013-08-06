var data = [
    {
		"id": 1,
        "title": 'App One',
        "url_scheme": 'appstore:',
        "appID": '288429040',
        "appName": 'App One',
        "appPublisher": 'StrongLoop',
        "category": 'Productivity',
        "appiOSInstall": 'https://itunes.apple.com/us/app/linkedin/id288429040?mt=8',
        "appAndroidInstall": 'https://play.google.com/store/apps/details?id=com.linkedin.android',
        "appIcon": 'http://localhost:3000/strongApps/one/appicon.png',
        "appDescription": 'In the know. On the go. The LinkedIn app for iPhone and iPad. Redesigned with you in mind! The new iPhone app makes it even easier to connect and grow your network, engage with professional content and gain insights right from the stream. The new intelligent navigation is personalized just for you based on how you use LinkedIn everyday.',
		"nodejsWebSitation": "http://venturebeat.com/2011/08/16/linkedin-node/"
    },
	   {
		"id": 2,
        "title": 'App Two',
        "url_scheme": '',
        "appID": '368677368',
        "appName": 'App Two',
        "appPublisher": 'StrongLoop',
        "category": 'Social Network',
        "appiOSInstall": 'http://itunes.apple.com/us/app/ubercab/id368677368?mt=8',
        "appAndroidInstall": 'https://play.google.com/store/apps/details?id=com.ubercab',
        "appIcon": 'http://localhost:3000/strongApps/two/appicon.png',
        "appDescription": 'Uber is Everyone\'s Private Driver™. Use the Uber app to request a private car in any city the service is available. The app lets your driver know precisely where to pick you up, and lets you know exactly how long until they arrive. At the end of your ride, the fare is charged to your credit card on file (no need to tip), and you receive a detailed receipt in-app and via email.',
		"nodejsWebSitation": "http://joyent.com/developers/videos/node-js-office-hours-curtis-chambers-uber"
    },
	{
		"id": 3,
        "title": 'App Three',
        "url_scheme": '',
        "appID": '338137227',
        "appName": 'App Three',
        "appPublisher": 'StrongLoop',
        "category": 'Lifestyle',
		"isPublic": true,
        "appiOSInstall": 'https://itunes.apple.com/us/app/walmart/id338137227?mt=8',
        "appIcon": 'http://localhost:3000/strongApps/three/appicon.png',
        "appDescription": ' With the Walmart app for iPhone, finding quality products at unbeatable prices is as simple as a few quick taps. Easy-to-use tools help you plan ahead, shop smart and save big, both in our stores and on the go. Low prices. Every day. On everything.  ',
		"nodejsWebSitation": "http://venturebeat.com/2012/01/24/why-walmart-is-using-node-js/"
    },
    {
		"id": 4,
        "title": 'App Four',
        "url_scheme": '',
        "appID": '284910350',
        "appName": 'App Four',
        "appPublisher": 'StrongLoop',
        "category": 'Education',
		"isPublic": true,
        "appiOSInstall": 'https://itunes.apple.com/us/app/blackboard-mobile-learn/id376413870?mt=8',
        "appIcon": 'http://localhost:3000/strongApps/four/appicon.png',
        "appDescription": 'Blackboard Mobile Learn makes it easier for you to keep up with your courses by letting you access them whenever and wherever you want – now on WiFi and cellular! If your school licenses Blackboard Mobile Learn, you’ll be able to use the app for free. If not, you will need to purchase access for just $1.99 a year or $5.99 for life.',
		"nodejsWebSitation": "www.strongloop.com"
    },
    {
		"id": 5,
        "title": 'App Five',
        "url_scheme": '',
        "appID": '284910350',
        "appName": 'App Five',
        "appPublisher": 'StrongLoop',
        "category": 'Education',
		"isPublic": true,
        "appiOSInstall": 'https://itunes.apple.com/us/app/blackboard-mobile-learn/id376413870?mt=8',
        "appIcon": 'http://localhost:3000/strongApps/five/appicon.png',
        "appDescription": 'Blackboard Mobile Learn makes it easier for you to keep up with your courses by letting you access them whenever and wherever you want – now on WiFi and cellular! If your school licenses Blackboard Mobile Learn, you’ll be able to use the app for free. If not, you will need to purchase access for just $1.99 a year or $5.99 for life.',
		"nodejsWebSitation": "www.strongloop.com"
    }
];

exports.findById = function(req, res) {
    console.log(req.params);
    var id = parseInt(req.params.id);
    console.log('findById: ' + id);
};

exports.findAll = function(req, res) {
    var name = req.query["name"];
	res.jsonp( data );
};

exports.servePList = function(req, res) {
    console.log(req.params);
    var id = parseInt(req.params.id);
    console.log('findById: ' + id);
};



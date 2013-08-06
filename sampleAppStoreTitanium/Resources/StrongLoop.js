

(function (strongloop) {
	
	strongloop.dataCache = [{
        title: 'Loopers App',
        url: 'appDetail.js',
        url_scheme: 'nbcipad',
        hasChild: true,
        appID: '284910350',
        appName: 'Loopers App',
        appPublisher: 'StrongLoop.com',
        category: 'Corp',
        appiTunesURL: 'http://itunes.apple.com/us/app/nbc/id442839435?mt=8',
        appIcon: 'http://a4.mzstatic.com/us/r1000/093/Purple/42/1a/71/mzl.jeuiugjm.175x175-75.jpg',
        appDescription: ' StrongLoop Loopers Employee Directory, Favorite your often contaced co-workers - Contact Inforamation, Co-workers time zone.  Native Features for emailing, calling,  ',
    },
    {
        title: 'Wunderlist',
        url: 'appDetail.js',
        url_scheme: 'wunderlist',
        hasChild: true,
        appID: '284910350',
        appName: 'Wunderlist',
        appPublisher: '6 Wunderkinder',
        category: 'Productivity',
        appiTunesURL: 'http://itunes.apple.com/us/app/wunderlist-to-do-listen/id406644151#',
        appIcon: 'http://a1.mzstatic.com/us/r1000/087/Purple/7a/14/9f/mzl.bbfujmku.175x175-75.jpg',
        appDescription: 'The Wunderlist mobile app for iPhone and iPod Touch will boost your productivity. Organize your to-do lists on the go and synchronize them with your free Wunderlist account. View and modify your tasks on Windows, Mac, iPad, Android and the Web. Hundreds of thousands of people worldwide use Wunderlist everyday. Wunderlist - your tasks anywhere, anytime. ',
    },
    {
        title: 'GetGlue',
        url: 'appDetail.js',
        url_scheme: 'getglue',
        hasChild: true,
        appID: '284910350',
        appName: 'GetGlue',
        appPublisher: 'AdaptiveBlue',
        category: 'Social Network',
        appiTunesURL: 'http://itunes.apple.com/us/app/getglue/id377615302?mt=8#',
        appIcon: 'http://a4.mzstatic.com/us/r1000/112/Purple/98/57/54/mzl.glsibxmb.175x175-75.jpg',
        appDescription: 'GetGlue is a fun social network for entertainment. Check-in to what you are watching, reading and listening to. Connect with friends, discover new favorites, and unlock FREE stickers and discounts.',
    }
    ];
	
	var baseURL = 'http://127.0.0.1:3000';
	//var baseURL = 'http://50.56.187.151:3000';
	var defaultModelName = "nodeapps";
	
	strongloop.getBaseURL = function () {
		return baseURL;
	}//end getBaseURL
	
	// Public method for clearing the data cache
	strongloop.clearDataCache = function () {
		flightCollectionCache.clear();
		flightCollection = null;
	}
	
	strongloop.trackEngagement = function(durationInMs) {
		Ti.API.info( "trackEngagement ! " + durationInMs);
		
		var xhr = Ti.Network.createHTTPClient();
		xhr.timeout = 1000000;
		xhr.open("POST", "http://localhost:1080/1.0/event/put" );
		var currentDateTime = new Date();
		
		//process.env.TZ = 'UTC';
		var start = Date.now();
	    //stop = start + durationInMs;
		//start,

		var nMS = parseInt(durationInMs);
		if( isNaN(nMS))
		{
			nMS = 300;
		}  // Do something
		

		Ti.API.info( "currentDateTime -" + currentDateTime.toUTCString() );
		var postData = [
		  {
		    "type": "testAppc",
		    "time": start,//"2011-09-12T21:33:12Z", //start, 
		    "data": {
		      "host": "web14",
		      "path": "/search",
		      "query": {
		        "q": "flowers"
		      },
		      "duration_ms": nMS,// parseInt(durationInMs),//241,
		      "status": 200,
		      "user_agent": "Chrome/13.0.782.112"
		    }
		  }
		]; //end postData
		
		xhr.setRequestHeader("Content-Type","application/json");
		xhr.send(JSON.stringify(postData));
		
	}//end trackEngagement
	
	// Public method for updating the dataCache
    //   success: callback function to be notified when data has been retrieved
    //   error: callback function to be notified if an error occurs during retrieval
	strongloop.updateDataCache = function (success, error) {
		
		Ti.API.info( "updateDataCache ! ");
		// create table view data object
		var data = [];
		
		var xhr = Ti.Network.createHTTPClient();
		xhr.timeout = 1000000;
		xhr.open("GET",baseURL+"/json/"+ defaultModelName );
		
		xhr.onload = function()
		{
			Ti.API.info( "onload ! ");
			try
			{
				//Ti.API.info( "this.responseText " + this.responseText );
				var response = eval('('+this.responseText+')');
				Ti.API.info( response.toString() );
				
				for (var c=0; c<response.length; c++){
					var responseObject = response[c];
					//Ti.API.info( responseObject.appName.toString() );
				}//end for response
				
				success(response);
				
			}//end try
			catch(e){
				//alert(e);
				error(e);
			}//end catch
		};//end onload
		
		// Get the data
		xhr.send();
	};//end updateDataCache
	
	// Public method for updating the dataCache
    //   success: callback function to be notified when data has been retrieved
    //   error: callback function to be notified if an error occurs during retrieval
	strongloop.getData = function ( modelName , success, error) {
		
		Ti.API.info( "getData ! ");
		// create table view data object
		var data = [];
		
		var xhr = Ti.Network.createHTTPClient();
		xhr.timeout = 1000000;
		xhr.open("GET", baseURL+"/json/" + modelName );
		
		Ti.API.info( baseURL+"/json/" + modelName );
		
		xhr.onload = function()
		{
			Ti.API.info( "onload ! ");
			try
			{
				var response = eval('('+this.responseText+')');
				Ti.API.info( response.toString() );
				
				for (var c=0; c<response.length; c++){
					var responseObject = response[c];
					//Ti.API.info( responseObject["title"].toString() );
					//Ti.API.info( responseObject.appName.toString() );
				}//end for response
				success(response);
			}//end try
			catch(e){
				//alert(e);
				error(e);
			}//end catch
		};//end onload
		
		// Get the data
		xhr.send();
	};//end updateDataCache
		
	
})(exports);



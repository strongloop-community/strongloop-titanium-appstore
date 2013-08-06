var bgColor = 'EBEBEB';
var btnColor = '#9a0707';

var createAboutWindow = function(app) {
  	var win = Ti.UI.createWindow({
  		title: 'About',
  		layout: 'vertical',
  		backgroundColor: bgColor
  	});
  	
  	var desc = Ti.UI.createTextArea({
  		value: app.appDescription,
  		top: 20,
  		bottom:20,
  		color: 'black',
  		backgroundColor: bgColor,
  		font:{ fontSize: 16, fontWeight:"bold" },
  		textAlign:"center",
  		editable: false,
  	});
  	
  	win.add(desc);
  	
  	if (Ti.Platform.osname === 'iphone') {
  		var b = Ti.UI.createButton({
  			title: 'Close',
  			style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
  		});
  		
  		b.addEventListener('click', function() {
  			win.close();
  		});
  		win.setRightNavButton(b);
  	}
  	
  	return win;
}//end createAboutWindow

function ApplicationWindow(opts) {
	
	//is this a public app or a private one ?
	if ( opts.appData.isPublic == false )
	{
		var StrongLoop = require('StrongLoop');
		opts.appData.appIcon = StrongLoop.getBaseURL() + opts.appData.appIconRelative;
		Ti.API.info( "resovled AppICON " + opts.appData.appIcon );
		opts.appData.appiOSInstall = StrongLoop.getBaseURL() + opts.appData.installURLRelativeiOSplist;
	}
	
	var self = Ti.UI.createWindow({
		title : opts.appData.title,
  		backgroundColor: bgColor
	});
	
	var topView = Ti.UI.createView({ backgroundColor: bgColor });
	
	var imageView = Titanium.UI.createImageView({
    	borderRadius:34,borderWidth:0,borderColor:"#5C3711",
		image:opts.appData.appIcon,
		width:160,
		height:160,
		top:25,
	});
	
	var BOTTOM_DELTA = 20;
	var BTN_HEIGHT = 40;
	var BTN_WIDTH = 200;
	var SPACING = 10;
	var bgGradient = {
		type: 'linear',
		colors: ['#EBEBEB','#666666'],
		startPoint: {x: 0, y: 0},
		endPoint: {x: 0, y: BTN_HEIGHT},
		backFillStart: false,
	};
	var bgSelectedGradient = {
		type: 'linear',
		colors: ['#666666', '#EBEBEB'],
		startPoint: {x: 0, y: 0},
		endPoint: {x: 0, y: BTN_HEIGHT},
		backFillStart: false,
	};
	
	var aboutButton = Ti.UI.createButton({
		title: 'About',
		font:{ fontSize:16,fontWeight:"bold" },
		style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
		borderRadius: 10,
		color: '#000',
		backgroundGradient: bgGradient,
		backgroundSelectedGradient:bgSelectedGradient,
		bottom: BOTTOM_DELTA + 2 * (SPACING + BTN_HEIGHT),
		height: BTN_HEIGHT,
		width: BTN_WIDTH,
		borderColor: '#000',
	});
	
	aboutButton.addEventListener('click', function(e) {
		createAboutWindow(opts.appData).open({modal: true});
	});
	topView.add( aboutButton );
	
	if (Ti.Platform.osname === 'iphone') {
		var launchStoreButton = Titanium.UI.createButton({ 
			title:'Open in AppStore',
			font:{ fontSize:16,fontWeight:"bold"  },
			bottom: BOTTOM_DELTA + (SPACING + BTN_HEIGHT), 
			height: BTN_HEIGHT,
			width: BTN_WIDTH,
			style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
			borderRadius: 10,
			color: '#000',
			backgroundGradient: bgGradient,
			backgroundSelectedGradient:bgSelectedGradient,
			borderColor: '#000',
		});
		
		launchStoreButton.addEventListener('click', function (e) {
		  	Titanium.Platform.openURL(opts.appData.appiOSInstall);
		});
		
		topView.add( launchStoreButton );
	}//end if (Ti.Platform.osname === 'iphone') {
	else { //android 
		Ti.API.info( " android ?");
	}//end else if android
	
	if (Ti.Platform.osname === 'iphone') {
		if (Ti.Platform.canOpenURL(opts.appData.url_scheme + '://')) {
			var launchAppButton = Titanium.UI.createButton({ 
				title:'Launch App',
				font:{ fontSize:10 },
				bottom: BOTTOM_DELTA, 
				height: BTN_HEIGHT, 
				width: BTN_WIDTH,
				style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
				borderRadius: 10,
				color: '#000',
				backgroundGradient: bgGradient,
				backgroundSelectedGradient:bgSelectedGradient,
				borderColor: '#000',
			});
			
			launchAppButton.addEventListener('click', function (e) {
		  		Ti.Platform.openURL(opts.appData.url_scheme + '://');
			});
			
			topView.add( launchAppButton );	
		}
	}//end if iOS
	else { //else android
		Ti.API.info( " android ?");
	}//end else if android
	
	topView.add( imageView );
	
    self.add( topView );
	return self;
};

module.exports = ApplicationWindow;

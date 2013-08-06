function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	var titleLabel = Ti.UI.createLabel({
		text: "Engagement",
		color: '#000',
		height: 70,
		font: {
			fontSize: 32
		},
		top: 90
	});
	self.add( titleLabel );
	
	var startTime = new Date().getTime();
	var buttonStart = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('Start Engagement'),
		top:160
	});
	self.add(buttonStart);
	buttonStart.addEventListener('click', function() {
		startTime = new Date().getTime();
	});
	
	var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('End Engagement'),
		top:260
	});
	self.add(button);
	
	button.addEventListener('click', function() {
		//Ti.App.fireEvent('WindowAppListingRefreshData',{data:['1','2','3']});
		Ti.API.info(" self.refreshData ");
		var StrongLoop = require('StrongLoop');
		
		var deltaTime = new Date().getTime() - startTime;
		Ti.API.info( "deltaTime : " + deltaTime );
		
		StrongLoop.trackEngagement(  deltaTime );
	});
	
	return self;
};

module.exports = ApplicationWindow;

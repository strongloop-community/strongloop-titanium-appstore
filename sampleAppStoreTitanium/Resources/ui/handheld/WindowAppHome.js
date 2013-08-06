function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	var imageView = Titanium.UI.createImageView({
			image:'images/StrongLoopLogo.png',
			width: 150,
			height: 109,
			top:24
		});
	self.add( imageView );
	
	var titleLabel = Ti.UI.createLabel({
		text: "App Store",
		color: '#000',
		height: 70,
		font: {
			fontSize: 32
		},
		top: 190
	});
	self.add( titleLabel );
	
	var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('Refresh'),
		top:260
	});
	self.add(button);
	
	button.addEventListener('click', function() {
		Ti.App.fireEvent('WindowAppListingRefreshData',{data:['1','2','3']});
	});
	
	return self;
};

module.exports = ApplicationWindow;

var defaultColorBlue = '#035385';
var defaultColorRed = '#9a0707';
var rowColor = '#EBEBEB';
var selectedRowColor = '#4B4B4B';
var backgroundColor = '#4B4B4B';
var defaultColor = defaultColorRed;

function ApplicationWindow(title) {

	DetailView = require('ui/handheld/WindowAppDetail');

	var self = Ti.UI.createWindow({
		title : title,
		backgroundColor : 'white'
	});

	var topView = Ti.UI.createView({});

	var footerLabel = Ti.UI.createLabel({
		backgroundColor : backgroundColor,
		color : "white",
		font : {
			fontSize : 10
		},
		text : "[data supplied by node.js]",
		textAlign : "center",
		height : 25,
		width : 320
	});

	var tv = Ti.UI.createTableView({
		footerView : footerLabel,
		backgroundColor : backgroundColor
	});

	tv.addEventListener('click', function(e) {
		dView = new DetailView({
			appData : e.rowData
		});
		var w = Ti.UI.createWindow({
			appData : e.rowData,
			title : e.rowData.appName
		});
		self.containingTab.open(dView);
	});
	self.add(tv);
	
	self.refreshData = function() {
		Ti.API.info(" self.refreshData ");
		var StrongLoop = require('StrongLoop');
		StrongLoop.getData("privateApps", function(data) {
			//Ti.API.info ( "success data[0] " + data[0].title );
			self.updateTableView(data);
		}, function() {
			Ti.API.info(" error");
		});
	}//end refreshData
	
	self.updateTableView = function(newData) {
		var data = [];
		var rows = [];
		
		for (var i = 0; i < newData.length; i++) {
			var sc_app = newData[i];

			Ti.API.info(" Add " + sc_app.appName);

			sc_app.height = '100';
			sc_app.backgroundColor = rowColor;
			sc_app.selectedBackgroundColor = selectedRowColor;
			sc_app.indentionLevel = 10;
			appRefIndex = i;
			
			var row = Ti.UI.createTableViewRow(sc_app);
			
			var rowView = Ti.UI.createView({
				height : 'auto',
				layout : 'vertical',
				left : 5,
				top : 5,
				bottom : 5,
				right : 5,
				backgroundGradient : {
					type : 'linear',
					colors : [{
						color : '#d4d4d4',
						position : 0.0
					}, {
						color : '#c4c4c4',
						position : 0.50
					}]
				}
			});

			var item_image = Ti.UI.createImageView({
				borderRadius : 17,
				borderWidth : 0,
				borderColor : rowColor,
				image : sc_app.appIcon,
				left : 20,
				top : 10,
				width : 70,
				height : 70
			});
			row.add(item_image);

			data.push(row);
		}//end for

		tv.setData(data);
	}//end updateTableView
	
	//add Listeners
	Titanium.App.addEventListener('WindowAppListingRefreshData', function(e) {
		self.refreshData();
	});
	self.addEventListener('open', function() {
		self.refreshData();
	});
	
	return self;
};

module.exports = ApplicationWindow; 
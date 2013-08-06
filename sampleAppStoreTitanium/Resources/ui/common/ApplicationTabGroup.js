function ApplicationTabGroup(Window) {
	
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	WindowAppListingPublic = require('ui/handheld/WindowAppListingPublicApps');
	WindowAppListingInternal = require('ui/handheld/WindowAppListingInternalApps');
	WindowAppListingSandbox = require('ui/handheld/WindowAppListingSandboxApps');
	
	WindowAppEngagement = require('ui/handheld/WindowAppEngagement');
	WindowHome = require('ui/handheld/WindowAppHome');
	
	var win1 = new WindowHome(L('Home'));
	var tab1 = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_views.png',
		window: win1
	});
	win1.containingTab = tab1;
	
	var win2 = new WindowAppListingPublic(L('Public'));
	var tab2 = Ti.UI.createTab({
		title: L('Public'),
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	var win3 = new WindowAppListingInternal(L('Internal'));
	var tab3 = Ti.UI.createTab({
		title: L('Internal'),
		icon: '/images/KS_nav_views.png',
		window: win3
	});
	win3.containingTab = tab3;
	
	var win4 = new WindowAppListingSandbox(L('Sandbox'));
	var tab4 = Ti.UI.createTab({
		title: L('Sandbox'),
		icon: '/images/KS_nav_views.png',
		window: win4
	});
	win4.containingTab = tab4;
	
	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);
	//self.addTab(tab4);
	
	return self;
};

module.exports = ApplicationTabGroup;

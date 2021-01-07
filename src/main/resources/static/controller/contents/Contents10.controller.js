sap.ui.require([
	"sap/m/Shell",
	"sap/m/App",
	"sap/m/Page",
	"sap/ui/core/ComponentContainer"
], function(
	Shell, App, Page, ComponentContainer) {
	"use strict";

	sap.ui.getCore().attachInit(function() {
		new Shell ({
			app : new App ({
				pages : [
					new Page({
						title : "ChartContainer - Simple Toolbar",
						enableScrolling : true,
						content : [
							new ComponentContainer({
								name : "OpenUI5",
								settings : {
									id : "OpenUI5"
								}
							})
						]
					})
				]
			})
		}).placeAt("content");
	});
});

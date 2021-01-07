sap.ui.define([
	"OpenUI5/controller/common/BaseController",
	'sap/ui/unified/DateRange',
	'sap/m/MessageToast',
	'sap/ui/core/format/DateFormat',
	'sap/ui/core/library'
], function(BaseController) {
	"use strict";
		
	return BaseController.extend("OpenUI5.controller.common.BaseController", {

		onInit : function () {
            window.contents4 = this; 
			console.log("Contents4.js OnInit()");
		}
	});
}, true);
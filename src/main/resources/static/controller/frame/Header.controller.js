sap.ui.define([
	"OpenUI5/controller/common/BaseController"
], function(BaseController){
    "use strict";

	return BaseController.extend("OpenUI5.controller.common.BaseController", {
		onInit : function () {
			console.log("Header.js OnInit()");
		}
	});
}, true);
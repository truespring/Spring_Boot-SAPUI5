sap.ui.define([
    "OpenUI5/controller/common/BaseController",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
], function (Controller, UIComponent, JSONModel) {
    "use strict";
    
    return Controller.extend("OpenUI5.controller.common.BaseController", 
    {
    	onInit: function() {
    		var oRouter = this.getRouter();
    		oRouter.getRoute("view2").attachMatched(this._onRouteMatched, this);
    		console.log(this)
		},

		_onRouteMatched: function(oEvent) {
			var sObjectId = oEvent.getParameter("arguments").row;
			var a = JSON.parse(sObjectId) ;
			console.log(a);
		}
    });
});
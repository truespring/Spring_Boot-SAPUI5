sap.ui.define([
    "OpenUI5/controller/common/BaseController",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History"
], function (Controller, UIComponent, JSONModel, History) {
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
			console.log(a)
			var oModel3 = new JSONModel(a)
			this.setModel(oModel3, "b")
			console.log(this.getModel("b"))
		},

        // 뒤로 가기 버튼
        onNavBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("contents1", {}, true);
            }
        }
    });
});
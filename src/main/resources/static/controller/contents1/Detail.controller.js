sap.ui.define([
    "OpenUI5.controller.common.BaseController",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/UIComponent"
], function (Controller, History, JSONModel, UIComponent) {
    "use strict";
    return Controller.extend("OpenUI5.controller.common.BaseController", {
        onInit: function () {            
        	var oRouter = this.getRouter();
    		oRouter.getRoute("detail").attachMatched(this._onRouteMatched, this);
    		console.log(this)

        },

        // 디테일 화면
        _onRouteMatched: function(oEvent) {
			var sObjectId = oEvent.getParameter("arguments").invoicePath;
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
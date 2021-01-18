sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/UIComponent"
], function (Controller, History, JSONModel, UIComponent) {
    "use strict";
    return Controller.extend("sap.ui.deme.walkthrough.controller.Detail_product", {
        onInit: function () {            
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("detail_product").attachPatternMatched(this._onObjectMatched, this);
            
			// set explored app's demo model on this sample
			var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/contents5_1.json"));
			this.getView().setModel(oModel);

        },

        // 디테일 화면
        _onObjectMatched: function (oEvent) {
        	console.log("디테일 on")
            this.getView().bindElement({
                path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
                model: "invoice"
            });
        },

        // 뒤로 가기 버튼
        onNavBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("contents5", {}, true);
            }
        },
        onNavSave: function () {
            alert("저장되었습니다.");
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("contents5", {}, true);
        }
    });
});
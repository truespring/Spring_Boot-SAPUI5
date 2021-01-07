sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/UIComponent"
], function (Controller, JSONModel, UIComponent) {
    "use strict";
    return Controller.extend("sap.ui.deme.walkthrough.controller.Detail_process", {
        onInit: function () {            
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("detail_process").attachPatternMatched(this._onObjectMatched, this);
            
			// set explored app's demo model on this sample
			var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/contents6_1.json"));
			this.getView().setModel(oModel);

        },

        // onOpenProcess : function () {
        //     this.getOwnerComponent().openProcessDialog();
        // },
        // onOpenProcessManagement : function () {
        //     this.getOwnerComponent().openProcessManagement();
        // }
        onOpenProcessDialog : function() {
            this.getOwnerComponent().openProcessDialog();
        },
        onOpenProcessManagement : function() {
            this.getOwnerComponent().openManagementDialog();
        },

        // 디테일 화면
        // _onObjectMatched: function (oEvent) {
        //     this.getView().bindElement({
        //         path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
        //         model: "invoice"
        //     });
        // },

        // 공정설정 & 검색 화면
        // onOpenDialog : function () {
        //     var oView = this.getView();

        //     if(!this.pDialog) {
        //         this.pDialog = Fragment.load({
        //             id: oView.getId(),
        //             name: "OpenUI5.view.contents6.processDialog",
        //             controller: this
        //         }).then(function (oDialog) {
        //             oView.addDependent(oDialog);
        //             return oDialog;
        //         });
        //     }

        //     this.pDialog.then(function(oDialog) {
        //         oDialog.open();
        //     });
        // },

        // 공정관리
        // onOpenManagementDialog : function () {
        //     var oView_1 = this.getView();

        //     if(!this.pDialog) {
        //         this.pDialog = Fragment.load({
        //             id: oView_1.getId(),
        //             name: "OpenUI5.view.contents6.processManagement",
        //             controller: this
        //         }).then(function (oDialog) {
        //             oView_1.addDependent(oDialog);
        //             return oDialog;
        //         });
        //     }

        //     this.pDialog.then(function(oDialog) {
        //         oDialog.open();
        //     });
        // },

    });
});
sap.ui.define([
    "OpenUI5/controller/common/BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(BaseController, Filter, FilterOperator) {
	"use strict";
		
	return BaseController.extend("OpenUI5.controller.common.BaseController", {

		onInit : function () {
            window.contents6 = this; 
            console.log("Contents6.js OnInit()");
            
		},
        onFilterInvoices : function (oEvent) {

            // build filter array
            var aFilter = [];
            var sQuery = oEvent.getParameter("query");
            if(sQuery) {
                aFilter.push(new Filter("Name", FilterOperator.Contains, sQuery));
            }

            // filter binding
            var oList = this.byId("invoiceList");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },
        onPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("detail_process", {
                invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
            });
        }
	});
}, true);
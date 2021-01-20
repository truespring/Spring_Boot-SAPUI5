sap.ui.define([
	"OpenUI5/controller/common/BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel"
], function (Controller, Filter, FilterOperator, JSONModel) {
    "use strict";

    return Controller.extend("OpenUI5.controller.common.BaseController", {
        onInit : function () {
        	this.localApi();
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
         
        errorCallbackFunction : function()
        {
            console.log("error callback");
        },
        
        localApi : function()
        {
            var oParam = {
                url     : "/test/productList",
                data	: "",
                callback: "callbackFunction",
                error   : "errorCallbackFunction"
            };
            
            this.callAjax(oParam);
        },
        
        callbackFunction : function(oModel)
        {
            var oData = oModel.getProperty("/");
            var oModel2 = new JSONModel(oData);
			console.log(oModel2)
               //oTabled의 아이디(invoiceList)가져와서 변수에 넣는다.
            var oTable = this.byId("idTable");
               //oTable 변수에 setModel 한다.
            oTable.setModel(oModel2,"oModel2");
            this.setModel(oModel2, "oModel3")
//            console.log(oTable.getModel("oModel2"))
            
            
            //전체에 모델 뿌려주기 
            //this.setModel(new JSONModel(oData),"omodel2");
        },
        onPress: function (oEvent) {
            var oRouter = this.getRouter();
            var oTable = oEvent.getSource().getBindingContext("oModel3");
            var InvoicePath = oTable.oModel.getProperty(oTable.sPath)
            oRouter.navTo("detail_product", {
                invoicePath: JSON.stringify(InvoicePath)
            });
        },
        onRegister : function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("register_product")
        }
    });
});
sap.ui.define([
	"OpenUI5/controller/common/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
    "use strict";
        
    return BaseController.extend("OpenUI5.controller.common.BaseController",
    {
    	onInit : function ()
        {
        	window.contents1 = this;
        	this.localApi();
        },
         
        errorCallbackFunction : function()
        {
            console.log("error callback");
        },
        
        localApi : function()
        {
            var oParam = {
                url     : "/test/index",
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
            console.log(oTable.getModel("oModel2"))
            
            
            //전체에 모델 뿌려주기 
            //this.setModel(new JSONModel(oData),"omodel2");
        },

        onPress: function (oEvent) {
//            var oItem = oEvent.getSource();
//            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//            console.log(window.encodeURIComponent(oItem.getBindingContext("oModel2").getPath().substr(1)))
//            oRouter.navTo("detail", {
//                invoicePath: window.encodeURIComponent(oItem.getBindingContext("oModel2").getPath().substr(1))
//            });
        	var oRouter = this.getRouter();
        	var oTable = oEvent.getSource().getBindingContext("oModel3");
        	var Row = oTable.oModel.getProperty(oTable.sPath);
        	oRouter.navTo("view2", {
        		row : JSON.stringify(Row)
        	})
        },
        
        onRegister: function () {
        	var oRouter = this.getRouter();
        	oRouter.navTo("register_board");
        }
    });
}, true);

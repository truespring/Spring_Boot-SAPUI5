sap.ui.define([
    "OpenUI5/controller/common/BaseController",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/UIComponent"
], function (Controller, History, JSONModel, UIComponent) {
    "use strict";
    return Controller.extend("OpenUI5.controller.common.BaseController", {
        onInit: function () {            
			// set explored app's demo model on this sample
			var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/contents5_1.json"));
			this.getView().setModel(oModel);

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
            
            // 작성한 값을 모두 지우는 코드
            var order_no = this.byId("order_no");
            order_no.setValue();
            var customers = this.byId("customers");
            customers.setValue();
            var deadline = this.byId("deadline");
            deadline.setValue();
            var product_name = this.byId("product_name");
            product_name.setValue();
            var product_size = this.byId("product_size");
            product_size.setValue();
            var quantity = this.byId("quantity");
            quantity.setValue();
            var product_quantity = this.byId("product_quantity");
            product_quantity.setValue();
            var start_date = this.byId("start_date");
            start_date.setValue();
            var end_date = this.byId("end_date");
            end_date.setValue();
            var materials = this.byId("materials");
            materials.setSelectedKey();
            var required_quantity = this.byId("required_quantity");
            required_quantity.setValue();
            var outsourcing = this.byId("outsourcing");
            outsourcing.setSelectedKey();
        },
        onNavRegister: function () {
            var oController = new Object();

            // console.log(this.getView().byId("order_no").getValue());
            // console.log(this.getView().byId("customers").getValue()); // text 가져오기
            // console.log(this.getViewIdValue("deadline")); // 달력 가져오기
            // console.log(this.getView().byId("select").getSelectedKey()); // actionselect 가져오기
            
            // view에서 값을 받아오는 코드
//            oController.order_no = this.getViewIdValue("order_no");
//            oController.customers = this.getViewIdValue("customers");
//            oController.deadline = this.getViewIdValue("deadline");
//            oController.product_name = this.getViewIdValue("product_name");
//            oController.product_size = this.getViewIdValue("product_size");
//            oController.quantity = this.getViewIdValue("quantity");
//            oController.product_quantity = this.getViewIdValue("product_quantity");
//            oController.start_day = this.getViewIdValue("start_day");
//            oController.end_day = this.getViewIdValue("end_day");
//            oController.select = this.getView().byId("select").getSelectedKey();
//            oController.requried_quantity = this.getViewIdValue("requried_quantity");
//            oController.select_2 = this.getView().byId("select_2").getSelectedKey();

            // 각 컬럼에 해당하는 데이터 변수에 담기
            var order_no = this.getViewIdValue("order_no");
            console.log(order_no)
            var customers = this.getViewIdValue("customers");
            console.log(typeof customers)
            var deadline = this.getViewIdValue("deadline");
            console.log(deadline)
            var product_name = this.getViewIdValue("product_name");
            console.log(product_name)
            var product_size = this.getViewIdValue("product_size");
            console.log(product_size)
            var quantity = this.getViewIdValue("quantity");
            console.log(quantity)
            var product_quantity = this.getViewIdValue("product_quantity");
            console.log(product_quantity)
            var start_date = this.getViewIdValue("start_date");
            console.log(start_date)
            var end_date = this.getViewIdValue("end_date");
            console.log(end_date)
            var materials = this.getView().byId("materials").getSelectedKey();
            console.log(typeof materials)
            var required_quantity = this.getViewIdValue("required_quantity");
            console.log(required_quantity)
            var outsourcing = this.getView().byId("outsourcing").getSelectedKey();
            console.log(outsourcing)

            if(materials == "선택") {
                alert("원자재를 선택해주세요.");
                return false;
            }
            // JSONModel로 변화
//            var oModel = new JSONModel(oController)

            axios.post('/test/index2', {
            	customers, order_no, deadline, product_name, product_size, quantity, 
            	product_quantity, start_date, end_date, materials, required_quantity, outsourcing
            }).then(function(res){
            	console.log(res)
            })
            // console.log(oModel)
            // console.log(this.getView().byId("materials").getValue());
            // var oRouter = UIComponent.getRouterFor(this);
            // oRouter.navTo("contents5", {}, true);
        }
    });
});
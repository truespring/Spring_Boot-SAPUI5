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
            var start_day = this.byId("start_day");
            start_day.setValue();
            var end_day = this.byId("end_day");
            end_day.setValue();
            var select = this.byId("select");
            select.setSelectedKey();
            var requried_quantity = this.byId("requried_quantity");
            requried_quantity.setValue();
            var select_2 = this.byId("select_2");
            select_2.setValue();
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
            var customers = this.getViewIdValue("customers");
            var order_no = this.getViewIdValue("order_no");
            var deadline = this.getViewIdValue("deadline");
            var product_name = this.getViewIdValue("product_name");
            var product_size = this.getViewIdValue("product_size");
            var quantity = this.getViewIdValue("quantity");
            var product_quantity = this.getViewIdValue("product_quantity");
            var start_day = this.getViewIdValue("start_day");
            var end_day = this.getViewIdValue("end_day");
            var select = this.getView().byId("select").getSelectedKey();
            var requried_quantity = this.getViewIdValue("requried_quantity");
            var select_2 = this.getView().byId("select_2").getSelectedKey();
            // console.log(oController)
            if(oController.select == "선택") {
                alert("원자재를 선택해주세요.");
                return false;
            }
            // JSONModel로 변화
//            var oModel = new JSONModel(oController)

            axios.post('/test/index2', {
            	customers, order_no, deadline, product_name, product_size, quantity, 
            	product_quantity, start_day, end_day, select, requried_quantity, select_2
            }).then(function(res){
            	console.log(res)
                if(res.data == 1) {
                    alert("등록되었습니다.")
                } else if(res.data == 2) {
                    alert("등록에 실패했습니다.")
                    return false;
                }
            })
            // console.log(oModel)
            // console.log(this.getView().byId("materials").getValue());
            // var oRouter = UIComponent.getRouterFor(this);
            // oRouter.navTo("contents5", {}, true);
        }
    });
});
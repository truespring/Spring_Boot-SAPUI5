sap.ui.define([
    "OpenUI5/controller/common/BaseController",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/UIComponent"
], function (Controller, History, JSONModel, UIComponent) {
    "use strict";
    return Controller.extend("OpenUI5.controller.common.BaseController", {
        onInit: function () {            

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
            
            // 작성한 값을 모두 지우는 코드
            var board_title = this.byId("board_title");
            board_title.setValue();
            var contents = this.byId("contents");
            contents.setValue();
            var writer_name = this.byId("writer_name");
            writer_name.setValue();
        },
        onNavRegister: function () {
            // view에서 값을 받아오는 코드
            var board_title = this.getViewIdValue("board_title");
            var contents = this.getViewIdValue("contents");
            var writer_name = this.getViewIdValue("writer_name");

            console.log(board_title)
            console.log(writer_name)

             axios.post('/test/reg', {
            	 board_title,
            	 contents,
            	 writer_name
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
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
			var a = JSON.parse(sObjectId);
			console.log(a);
			var oModel3 = new JSONModel(a);
			this.setModel(oModel3, "b");
			console.log(this.getModel("b"));
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
        },
        
        // 수정 버튼
        onSaveButton : function () {
        	var board_no = this.getView().byId("board_no").getText();
        	var board_title = this.getView().byId("board_title").getValue();
        	var contents = this.getView().byId("contents").getValue();
        	var writer_name = this.getView().byId("writer_name").getText();
        	console.log("번호 : " + board_no)
        	console.log("제목 : " + board_title)
        	console.log("작가 : " + writer_name)
        	axios.post('/test/reg', {
        		board_no,
        		board_title,
        		contents,
        		writer_name
        	}).then(function(res){
        		console.log(res)
        	})
        	
        	alert("수정되었습니다.");
        	var oRouter = this.getRouter();
        	oRouter.navTo("contents1", {}, true);
        }, 
        
        // 삭제 버튼
        onDeleteButton : function () {
        	var board_no = this.getView().byId("board_no").getText();
        	console.log("번호 : " + board_no)
        	axios.post('/test/del', {
        		board_no
        	}).then(function(res) {
        		console.log(res)
        	})
        	alert("삭제되었습니다.")
        	var oRouter = this.getRouter();
        	oRouter.navTo("contents1", {}, true);
        }
    });
});
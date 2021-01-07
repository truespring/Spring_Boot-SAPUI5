sap.ui.define([
	"OpenUI5/controller/common/BaseController"
], function(BaseController) {
    "use strict";
        
    return BaseController.extend("OpenUI5.controller.common.BaseController",
    {
        onInit : function ()
        {
            // 브라우저 개발자창에서 window.contents1으로 데이터를 찾아들어갈 수 있음
            // 모든 메인 페이지에 작성해줘야함
            window.contents1 = this; 
            console.log("Content1.js onInit()")
        }
        
    });
}, true);

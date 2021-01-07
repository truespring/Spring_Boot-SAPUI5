sap.ui.define([
	"OpenUI5/controller/common/BaseController",
	"sap/ui/core/format/DateFormat",
	"sap/ui/model/json/JSONModel"
], function(BaseController, DateFormat, JSONModel) {
	"use strict";
		
	return BaseController.extend("OpenUI5.controller.common.BaseController", {

		onInit : function () {
			console.log("Contents2.js OnInit()");
            window.contents2 = this; 
			// set mock model
			var sPath = sap.ui.require.toUrl("OpenUI5/feed.json");
			var oModel = new JSONModel(sPath);
			this.getView().setModel(oModel);
		},
		onPost: function(oEvent) {
			var oFormat = DateFormat.getDateTimeInstance({ style: "medium" });
			var oDate = new Date();
			var sDate = oFormat.format(oDate);
			// create new entry
			var sValue = oEvent.getParameter("value");
			var oEntry = {
				Author: "Alexandrina Victoria",
				AuthorPicUrl: "http://upload.wikimedia.org/wikipedia/commons/a/aa/Dronning_victoria.jpg",
				Type: "Reply",
				Date: "" + sDate,
				Text: sValue
			};

			// update model
			var oModel = this.getView().getModel();
			var aEntries = oModel.getData().EntryCollection;
			aEntries.unshift(oEntry);
			oModel.setData({
				EntryCollection: aEntries
			});
		},

		onSenderPress: function(oEvent) {
			MessageToast.show("Clicked on Link: " + oEvent.getSource().getSender());
		},

		onIconPress: function(oEvent) {
			MessageToast.show("Clicked on Image: " + oEvent.getSource().getSender());
		}
	});
}, true);
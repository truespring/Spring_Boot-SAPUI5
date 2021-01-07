sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment",
	"sap/ui/model/json/JSONModel"
], function (ManagedObject, Fragment, JSONModel) {
	"use strict";

	return ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialog", {

		constructor : function (oView) {
			this._oView = oView;
		},

		exit : function () {
			delete this._oView;
		},

		openManagement : function () {
			var oView = this._oView;
			// create dialog lazily
			if (!this.pDialog) {
				var oFragmentController = {
					onCloseManagementDialog : function () {
						oView.byId("inspectionManagementDialog").close();
					},
					onSaveManagemnetDialog : function () {
						alert("등록되었습니다.");
						oView.byId("inspectionManagementDialog").close();
					}
				};
				// load asynchronous XML fragment
				this.pDialog = Fragment.load({
					id: oView.getId(),
					name: "OpenUI5.view.contents8.InspectionManagement",
					controller: oFragmentController
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					return oDialog;
				});
			} 
			this.pDialog.then(function(oDialog) {
				oDialog.open();
			});
		}

	});

});
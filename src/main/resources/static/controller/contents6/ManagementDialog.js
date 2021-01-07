sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {
	"use strict";

	return ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialog", {
		
		constructor : function (oView) {
			this._oView = oView;
		},

		exit : function () {
			delete this._oView;

		},

		// openProcessDialog : function (path) {
		// 	var oView = this._oView;
		// 	this.pDialog = null;
		// 	// create dialog lazily
		// 	if (!this.pDialog) {
		// 		var oFragmentController = {
		// 			onCloseDialog : function () {
		// 				oView.byId("processDialog").close();
		// 			},
			
		// 			onSaveDialog : function () {
		// 				alert("저장되었습니다.")
		// 				oView.byId("processDialog").close();
		// 			}
		// 		};
		// 		// load asynchronous XML fragment
		// 		this.pDialog = Fragment.load({
		// 			id: oView.getId(),
		// 			name: "OpenUI5.view.contents6." + path,
		// 			controller: oFragmentController
		// 		}).then(function (oDialog) {
		// 			// connect dialog to the root view of this component (models, lifecycle)
		// 			oView.addDependent(oDialog);
		// 			return oDialog;
		// 		});
		// 	} 
		// 	this.pDialog.then(function(oDialog) {
		// 		oDialog.open();
		// 		oDialog = null;
		// 	});
		// }

		openManagement : function () {
			var oView = this._oView;
			// create dialog lazily
			if (!this.pDialog) {
				var oFragmentController = {
					// onCloseDialog : function () {
					// 	oView.byId("processDialog").close();
					// },
			
					// onSaveDialog : function () {
					// 	alert("저장되었습니다.")
					// 	oView.byId("processDialog").close();
					// },

					onCloseManagementDialog : function () {
						oView.byId("managementDialog").close();
					},
			
					onSaveManagementDialog : function () {
						alert("수정되었습니다.")
						oView.byId("managementDialog").close();
					}
				};
				// load asynchronous XML fragment
				this.pDialog = Fragment.load({
					id: oView.getId(),
					name: "OpenUI5.view.contents6.processManagement",
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
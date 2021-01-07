sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {
	"use strict";

	return ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialog", {

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
		
		constructor : function (oView) {
			this._oView = oView;
		},

		exit : function () {
			delete this._oView;

		},

		openProcess : function () {
			var oView = this._oView;
			// create dialog lazily
			if (!this.pDialog) {
				var oFragmentController = {
					onCloseDialog : function () {
						oView.byId("processDialog").close();
					},
			
					onSaveDialog : function () {
						alert("저장되었습니다.")
						oView.byId("processDialog").close();
					}
				};
				// load asynchronous XML fragment
				this.pDialog = Fragment.load({
					id: oView.getId(),
					name: "OpenUI5.view.contents6.processDialog",
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

		// openManagement : function () {
		// 	var oView = this._oView;
		// 	// create dialog lazily
		// 	if (!this.pDialog) {
		// 		var oFragmentController = {
		// 			// onCloseDialog : function () {
		// 			// 	oView.byId("processDialog").close();
		// 			// },
			
		// 			// onSaveDialog : function () {
		// 			// 	alert("저장되었습니다.")
		// 			// 	oView.byId("processDialog").close();
		// 			// },

		// 			onCloseManagementDialog : function () {
		// 				oView.byId("managementDialog").close();
		// 			},
			
		// 			onSaveManagementDialog : function () {
		// 				alert("수정되었습니다.")
		// 				oView.byId("managementDialog").close();
		// 			}
		// 		};
		// 		// load asynchronous XML fragment
		// 		this.pDialog = Fragment.load({
		// 			id: oView.getId(),
		// 			name: "OpenUI5.view.contents6.processManagement",
		// 			controller: oFragmentController
		// 		}).then(function (oDialog) {
		// 			// connect dialog to the root view of this component (models, lifecycle)
		// 			oView.addDependent(oDialog);
		// 			return oDialog;
		// 		});
		// 	} 
		// 	this.pDialog.then(function(oDialog) {
		// 		oDialog.open();
		// 	});
		// }

	});

});
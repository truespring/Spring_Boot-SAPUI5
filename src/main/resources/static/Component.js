sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controller/contents6/ProcessDialog",
    "./controller/contents6/ManagementDialog",
    "./controller/contents7/PerformanceDialog",
    "./controller/contents8/HistoryDialog",
    "./controller/contents8/InspectionManagementDialog"
], function (UIComponent, JSONModel, ProcessDialog, ManagementDialog, PerformanceDialog, HistoryDialog, InspectionManagementDialog) {
    "use strict";

    return UIComponent.extend("OpenUI5.Component", {

        metadata: {
            manifest: "json"
        },
        
        init: function () {
        	console.log("Component.js init()");
            // set data model
			var oData = {
                recipient : {
                    name : "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);
            
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // create the views based on the url/hash
            var oRouter = this.getRouter();
            oRouter.initialize();
            
            // set dialog
            this._processDialog = new ProcessDialog(this.getRootControl());
            this._managementDialog = new ManagementDialog(this.getRootControl());
            this._performaneceDialog = new PerformanceDialog(this.getRootControl());
            this._historyDialog = new HistoryDialog(this.getRootControl());
            this._inspectionManagementDialog = new InspectionManagementDialog(this.getRootControl());
		},


		exit : function() {
            this._processDialog.destroy();
            delete this._processDialog;

            this._managementDialog.destroy();
            delete this._managementDialog;

            this._performaneceDialog.destroy();
            delete this._performaneceDialog;

            this._historyDialog.destroy();
            delete this._historyDialog;

            this._inspectionManagementDialog.destroy();
            delete this._inspectionManagementDialog;
		},

		openProcessDialog : function () {
			this._processDialog.openProcess();
        },
        
        openManagementDialog : function () {
            this._managementDialog.openManagement();
        },

        openPerformanceDialog : function () {
            this._performaneceDialog.openPerformance();
        },

        openHistoryDialog : function () {
            this._historyDialog.openHistory();
        },

        openInspectionManagementDialog : function () {
            this._inspectionManagementDialog.openManagement();
        }
    });
});
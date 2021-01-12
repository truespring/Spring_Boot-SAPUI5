sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
], function (Controller, UIComponent, JSONModel) {
    "use strict";
    
    return Controller.extend("OpenUI5.controller.BaseController", 
    {
    	/**
		 * Convenience method for getting the manifest.json file entry value.
		 * @public
		 * @returns {string} manifest.json file entry value
		 */
		getManifestEntry : function (sEntry) {
			return this.getOwnerComponent().getManifestEntry(sEntry);
		},
    	
    	getRouter: function ()
        {
            return UIComponent.getRouterFor(this);
        },
 
        getModel: function (sName)
        {
            return this.getView().getModel(sName);
        },
 
        setModel: function (oModel, sName)
        {
            return this.getView().setModel(oModel, sName);
        },
 
        getResourceBundle: function ()
        {
            return this.getOwnerComponent().getModel("i18n").getResourceBundle();
        },
        onActive: function() {},
        
        callAjax : function(oParam)
        {  
            console.log("BaseController callAjax() oParam.url: " + oParam.url);
            
            if (!oParam.callback) { return; }
            var that   = this;
            var _oData = oParam.data || '';
			var _sType = oParam.type || 'get';

			if(_sType.toLowerCase() != 'get' && typeof _oData == 'object') {
				_oData = JSON.stringify(_oData);
			}
            
            jQuery.ajax({
                type        : _sType,
                data        : _oData,
                contentType : "application/json; charset=utf-8",
				mediatype   : "application/json",
                url         : oParam.url,
                dataType    : "json",
                async       : true,
                success     : 
                    function(oData, textStatus, jqXHR)
                    {
                        var oModel = new JSONModel();
                        oModel.setData(oData); 
                    
                        var proxyFunc = jQuery.proxy(that, oParam.callback, oModel);
                        proxyFunc();
                    },
                error       : 
                    function(e)
                    {
                        var proxyFunc = jQuery.proxy(that, oParam.error);
                        if(proxyFunc){
                        	proxyFunc();
                        } else{
                        	MessageBox.error( "Error occured" );
                        }
                    }
            });
        }
    });
});
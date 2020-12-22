/*global QUnit, opaTest*/

sap.ui.define([
    "sap/ui/demo/walkthrough/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/App"
], function (mockserver) {
    "use strict";

    QUnit.module("Navigation");

    opaTest("Should open the Hello dialog", function (Given, When, Then) {
        // initalize the mock server
        mockserver.init();

        // Arrangments
        Given.iStartMyUIComponent({
            componentConfig: {
                name: "sap.ui.demo.walkthrough"
            }
        });

        // Actions
        When.onTheAppPage.iPressTheSayHelloWithDialogButton();

        // Assertions
        Then.onTheAppPage.iShouldSeeTheHelloDialog();

        // Cleanup
        Then.iTeardownMyApp();
    });
});
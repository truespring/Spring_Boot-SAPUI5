sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
    "use strict";

    new ComponentContainer({
        name: "sap.ui.demo.walkthrough",
        settings: {
            id: "walkthrought"
        },
        async: true
    }).placeAt("content");
})
﻿define(['Boiler', './settings', './clickCounter/component'], function (Boiler, settings, ClickCounterComponent) {

    var Module = function (globalContext) {

        var context = new Boiler.Context(globalContext);
        context.addSettings(settings);

        var controller = new Boiler.UrlController($(".appcontent"));
        controller.addRoutes({
            //'clickcounter': new ClickCounterComponent(context)
            'clickcounter': new ClickCounterComponent(context)
        });
        controller.start();

    };

    return Module;

});
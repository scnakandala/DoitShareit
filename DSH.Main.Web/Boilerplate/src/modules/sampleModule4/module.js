define(['Boiler', './settings', './departments/component'], function(Boiler, DepartmentComponent) {

	var Module = function(globalContext) {

		var context = new Boiler.Context(globalContext);
		context.addSettings(settings);

		var controller = new Boiler.UrlController($(".appcontent"));
		controller.addRoutes( {
			'departments/:name:' : new DepartmentComponent(context)
		});
		controller.start();

	};

	return Module;

});

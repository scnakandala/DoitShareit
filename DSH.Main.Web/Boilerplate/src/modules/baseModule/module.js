define(['Boiler', './mainMenu/component', './language/component', './theme/component', './newsFeed/component', './footer/component','./sidePane/component'], function(Boiler, MainMenuComponent, LanguageComponent, ThemeComponent, NewsFeedComponent, FooterComponent,SidePaneComponent) {

    var Module = function(globalContext) {
        var context = new Boiler.Context(globalContext);

        //scoped DomController that will be effective only on $('#page-content')
        var controller = new Boiler.DomController($('#page-content'));
        //add routes with DOM node selector queries and relavant components
        controller.addRoutes({
            ".main-menu": new MainMenuComponent(context),
            ".side-pane": new SidePaneComponent(context),
            ".language" : new LanguageComponent(context),
            ".theme" : new ThemeComponent(context),
            ".footer" : new FooterComponent(context)
        });
        controller.start();

        //the landing page should respond to the root URL, so let's use an URLController too
        var controller = new Boiler.UrlController($(".appcontent"));
        controller.addRoutes({
            "/" : new NewsFeedComponent()
        });
        controller.start();
    };

    return Module;

});

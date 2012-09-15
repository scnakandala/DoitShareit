define(['Boiler', 'text!./view.html', './wallPost/component', './wall/component'], function (Boiler, template, WallPostComp, WallComp) {

    /**
    * Parent Component class that will hold the clickme and lottery components
    * @class 
    * @param moduleContext {Boiler.Context} 
    */
    var newsFeedComponent = function (moduleContext) {

        var parentPanel = null;

        this.activate = function (parent, params) {
            if (!parentPanel) {
                //create the holding panel for clickme and lottery components
                parentPanel = new Boiler.ViewTemplate(parent, template, null);
                //create the clickme component and append to the parent
                var wallPostComp = new WallPostComp(moduleContext);
                wallPostComp.initialize($('#wallPost'));
                //create lottery component and add to the parent
                var wallComp = new WallComp(moduleContext);
                wallComp.initialize($('#wall'));
            }
            parentPanel.show();
        }

        this.deactivate = function () {
            if (parentPanel) {
                parentPanel.hide();
            }

        }
    };

    return newsFeedComponent;

});

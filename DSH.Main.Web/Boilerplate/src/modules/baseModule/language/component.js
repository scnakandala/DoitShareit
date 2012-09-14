define(['require', 'Boiler', 'text!./view.html'], function (require, Boiler, template) {

    var Component = function (moduleContext) {
        var panel = null;
        return {
            activate: function (parent) {
                //if (!panel) {
                //create the visual language selection component
                //We don't this neither
                //panel = new Boiler.ViewTemplate(parent, template);
                /* here we do not use any MVC. MVVM but use simple jquery event handler.
                * This is to demonstrate that there is no need of knockoutjs or other
                * library to use boilerplateJS. But we recommend you to use a MVX library
                * for any non trivial code.
                */

                //We don't have click events
                //$("#lang-selector li").bind("click", function() {
                //	if (this.id) {
                //	moduleContext.setLanguage(this.id);
                //	}
                //});
                //}
                //panel.show();
                if (this.id) {
                    moduleContext.setLanguage(this.id);
                }
            },

            deactivate: function () {
                if (panel) {
                    //We don't need this
                    //panel.hide();
                }
            }
        };
    };

    return Component;

});

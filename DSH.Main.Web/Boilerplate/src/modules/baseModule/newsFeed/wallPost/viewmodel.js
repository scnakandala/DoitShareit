define([], function () {

    var ViewModel = function (moduleContext) {
        this.post = function () {
            alert('Post Button was pushed');
        };
    };

    return ViewModel;
});

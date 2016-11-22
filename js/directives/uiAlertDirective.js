angular.module("listaTelefonica").directive("uiAlert", function () {
    return {
        templateUrl: "view/uiAlert.html",
        replace: true,
        restrict: "AE",
        scope: {
            title: "@",
        },
        transclude: true
    }
});
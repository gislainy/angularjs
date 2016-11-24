angular.module("listaTelefonica").directive("uiAccordions", function () {
    return {
        controller: function ($scope, $element, $attrs) {
            var accordions = [];
            this.registerAccordion = function(accordion) {
                accordions.push(accordion);
            };
            this.closeAll = function (accordionAtual) {
                accordions.forEach(function (accordion) {
                    if(accordion.$id != accordionAtual.$id)
                        accordion.isOpened = false;
                });
            }
        }
    };
});
angular.module("listaTelefonica").directive("uiAccordion", function () {
    return {
        templateUrl: "view/uiAccordion.html",
        transclude: true,
        scope: {
            title: "@",
        },
        require: "^uiAccordions",
        link: function(scope, element, attrs, controller){
            controller.registerAccordion(scope);
            scope.open = function () {
                controller.closeAll(scope);
                scope.isOpened=!scope.isOpened;
            }
        }
    }
});
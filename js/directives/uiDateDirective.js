angular.module("listaTelefonica").directive("uiDate", function ($filter) {
    return {
        require: "ngModel",
        link: function (scope, element, atrrs, controller) {
            var _formatDate = function (date) {
                var date = date.replace(/[^0-9]+/g, "");
                if(date.length > 2)
                    date = date.substring(0,2) + "/" + date.substring(2);
                if(date.length > 5)
                    date = date.substring(0,5) + "/" + date.substring(5,9);
                return date;
            };
            element.bind("keyup", function () {
                controller.$setViewValue(_formatDate(controller.$viewValue));
                controller.$render()
            });
            controller.$parsers.push(function (value) {
                if(value.length === 10){
                    var data = value.split("/");
                    var ano = data[2];
                    var mes = data[1] - 1;
                    var dia = data[0];
                    return new Date(ano, mes, dia).getTime();
                }
            });
            controller.$formatters.push(function (value){
                return $filter("date")(value, "dd/MM/yyyy");
            });
        }
    };
});
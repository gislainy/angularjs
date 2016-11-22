angular.module("listaTelefonica").service("operadoraAPI", function ($http, config) {
    this.getOperadoras = function () {
        return $http.get(config.baseUrl+"/operadoras");
    }
});
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadoraAPI, serialGenerator) {
	$scope.app = "Lista Telefonica";
	$scope.contatos = [];
	$scope.operadoras = [];
	$scope.error = "";
	$scope.adicionarContato = function (contato) {
		contato.serial = serialGenerator.genarate();
		contato.data = new Date();
		contatosAPI.saveContato(contato).success(function (contato) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregaContatos();
		}).error(function () {
			
		});
	};
	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function(elemento) {
		$scope.criterioDeOrdenacao = elemento;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	var carregaContatos = function () {
		contatosAPI.getContatos().success(function (contatos) {
			$scope.contatos = contatos;
		}).error(function () {
			$scope.error = "Nao foi possivel carregar os contatos!";
			//console.log($scope.error);
		});
	};
	var carregaOperadoras = function () {
		operadoraAPI.getOperadoras().success(function (operadoras) {
			$scope.operadoras = operadoras
		}).error(function (data) {
			//console.log("aconteceu um erro na operadora");
		});
	};
	carregaContatos();
	carregaOperadoras();
});
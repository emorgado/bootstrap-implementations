(function(angular){

    'use strict';

    angular
        .module('home')
        .controller('homeCtrl', homeCtrl);


    function homeCtrl(){

        var vm = this;

        // -- variaveis
        vm.empresasDisponiveis = [
            {
                id: 1,
                nome: "Google",
                selected: false
            },{
                id: 2,
                nome: "Iadtec",
                selected: false
            },{
                id: 3,
                nome: "Facebook",
                selected: false
            },{
                id: 4,
                nome: "AABB",
                selected: false
            },{
                id: 5,
                nome: "RFControl",
                selected: false
            }
        ];

        vm.empresas = [];

        //-- métodos externalizados
        vm.seleciona =  seleciona;

        //-- inicialização

        //-- funções
        function seleciona( empresa ){
            empresa.selected = !empresa.selected;
            vm.empresas = [];
            angular.forEach( vm.empresasDisponiveis, function( el, idx ){
                if( el.selected === true ){
                    vm.empresas.push( el );
                }
            });
        }
    }


})(angular);
(function () {

    'use strict';

    angular.module('LunchCheck', [])

        .controller('LunchController', LunchController);

    LunchController.$inject = ['$scope'];

    function LunchController($scope) {
        $scope.result = "";
        $scope.checkLunchItems = function () {
            var arrItems;
            if ($scope.lunchItems) {
                arrItems = $scope.lunchItems.split(',');
                if (arrItems.length <= 3) {
                    $scope.result = "Enjoy";
                } else {
                    $scope.result = "Too much";
                }
            } else {
                $scope.result = "Please enter data first";
            }
        }
    }
})();
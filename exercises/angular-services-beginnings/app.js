var app = angular.module('favJordans', []);

app.controller("mainCntrl", ["$scope", "shoeService", function ($scope, shoeService) {

    $scope.submit = function (addShoe) {
        $scope.addShoe = {
            shoeName: $scope.jordans,
            shoeImage: $scope.imgUrl
        };

        $scope.jordans = "";
        $scope.imgUrl = "";


        $scope.shoes = shoeService.addShoe($scope.addShoe);


//        $scope.delete = shoeService.removeShoe($scope.addShoe);

    }
}])
var app = angular.module("cartoonNetwork", []);

app.controller("mainCntrl", ["$scope", "cartoonService", function ($scope, cartoonService) {
    $scope.submit = function () {
        $scope.addCartoon = {
            title: $scope.title,
            image: $scope.imgUrl,
            description: $scope.description
        };

        $scope.cartoons = cartoonService.addCartoon($scope.addCartoon);

        $scope.title = "";
          $scope.imgUrl = "";
          $scope.description = "";
    }
}])
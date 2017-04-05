var app = angular.module("hitList", []);

app.controller('mainCntrl', ['$scope', 'hitService', function ($scope, hitService) {

    hitService.getHittas().then(function (hittas) {
        $scope.hittas = hittas
    })


}])
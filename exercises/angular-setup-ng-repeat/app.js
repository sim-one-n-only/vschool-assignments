var app = angular.module('angularSetup', []);

app.controller('mainCntrl', ['$scope', function ($scope) {

    $scope.player = [
        {
            handle: "shooter",
            rank: 2000,
            clan: ["solo-dolo", "myhitta-myhitta", "none Otha55"]
        },
        {
            handle: "ydg kings",
            rank: 1375,
            clan: ["solo-dolo", "bike life-410", "jolly green giants"]
        }, {
            handle: "killa clowns",
            rank: 1729,
            clan: ["call of shootie", "myhitta-myhitta", "all-4-one"]
        }, {
            handle: "dragon-fly jones",
            rank: 1923,
            clan: ["silence", "gettin ready take you down boy", "noneOtha55"]
        },

    ]

}])
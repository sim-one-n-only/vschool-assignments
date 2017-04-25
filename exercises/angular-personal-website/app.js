var app = angular.module("urbanDictionary", ["ngRoute"]);


app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "home/home.html",
            controller: "homeCntrl"
        })

    .when("/define", {
        templateUrl: "/define/define.html",
        controller: "defineCntrl"
    })

    .when("/sentence", {
        templateUrl: "/sentence/sentence.html",
        controller: "sentenceCntrl"
    })

    .otherwise({
        redirectTo: "/home"
    })

}])

app.controller("scheduleController", function ($scope, scheduleService, $filter, MaterialCalendarData) {
    $scope.schedule = [];
    scheduleService.getSchedule().then(function (response) {
        $scope.schedule = response;
        console.log(response);
    })

    $scope.submit = function (input) {
        scheduleService.postSchedule(input).then(function (data) {
            $scope.schedule.push(data);
        })
    }

    $scope.remove = function (index, id) {

        scheduleService.removeSchedule(id).then(function (response) {
            $scope.schedule.splice(index, 1);
        })
    }

    $scope.save = function (editItem) {
        scheduleService.saveSchedule(editItem);
    }

    $scope.dayFormat = "d";

    // To select a single date, make sure the ngModel is not an array.
    $scope.selectedDate = null;

    // If you want multi-date select, initialize it as an array.
    $scope.selectedDate = [];

    $scope.firstDayOfWeek = 0; // First day of the week, 0 for Sunday, 1 for Monday, etc.
    $scope.setDirection = function (direction) {
        $scope.direction = direction;
        $scope.dayFormat = direction === "vertical" ? "EEEE, MMMM d" : "d";
    };

    $scope.dayClick = function (date) {
        $scope.msg = "You clicked " + $filter("date")(date, "MMM d, y h:mm:ss a Z");
    };

    $scope.prevMonth = function (data) {
        $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
    };

    $scope.nextMonth = function (data) {
        $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
    };

    $scope.tooltips = true;

    $scope.setDayContent = function (date, content) {
        if (!content) {
            content = "<p></p>"
        }
        // You would inject any HTML you wanted for
        // that particular date here.

        date = new Date(date)
        date = date.toString()
        console.log(date)
        console.log(typeof date)

        return scheduleService.getScheduleContent("/schedule/content?date=" + date).then(function (response) {
            if (!response.data) {
                return `<p>`
            }
            return `<p>${response.data}</p>`;

        })



    };

    $scope.day = new Date("2017/04/25");

    //	$scope.setDayContent(day, "<p>hey jason</p>")

})
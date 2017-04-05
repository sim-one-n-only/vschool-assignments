app.directive('cpWishList', function () {
    return {
        restrict: "E",
        template: "<span ng-repeat='item in items'><h4>{{ item.name }}</h4><img ng-src='{{item.imgUrl}}'><h6>{{ item.price }}</h6></span>"
    }
})


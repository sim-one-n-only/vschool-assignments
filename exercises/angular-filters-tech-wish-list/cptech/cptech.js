app.directive('cpWishList', function () {
    return {
        restrict: "E",
        template: "<span ng-repeat='item in items'><h2>{{ item.name }}</h2><h4 ng-model='amount'>{{ item.price | currency:'€':2}}</h4><img ng-src='{{item.imgUrl}}'></span>"
    }
})
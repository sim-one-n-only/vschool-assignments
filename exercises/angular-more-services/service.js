var app = angular.module("cartoonNetwork");

app.service("cartoonService", function () {
    this.cartoonList = [];
    
    this.addCartoon = function (cartoon) {
        this.cartoonList.push(cartoon);
        return this.cartoonList;
    }
})
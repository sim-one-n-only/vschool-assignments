var shopper = {
    name: "Simone",
    age: 32,
    favoriteStores: ["Weis", "Safeway", "Whole Foods"],
    groceryCart: ["brussel sprouts", "eggs", "cheese"],
    isCouponing: true,
    foodForDinner = function (groceryCart) {
       return this.groceryCart;
   }
}

shopper.foodForDinner();
//    



//isAllowedToBuyCigarettes: function () {
//        if (this.age < 19) {
//            return false;
//        } else {
//            return true;
//        }
//    }
//};



//var employee = {
//    name: "Seymour Butts",
//    pets: [
//        {
//            type: "reptile",
//            habitat: "desert",
//            species: "Iguana"
//        },
//        {
//            type: "reptile",
//            habitat: "desert",
//            species: "Water Dragon"
//        },
//        {
//            type: "reptile",
//            habitat: "desert",
//            species: "Gecko"
//        },
//    ],
//    
//};
//employee.pets[0].species;
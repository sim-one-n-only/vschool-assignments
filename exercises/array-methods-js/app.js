var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = [ "carrot", "tomato", "pepper", "lettuce"];
console.log("fruit:", fruit);
console.log("vegetables:", vegetables); 

vegetables.pop();
console.log(vegetables);

var removed = fruit.splice(0, 1);
console.log(removed);
console.log(fruit);

console.log(fruit.indexOf("orange"));


var add = fruit.push(1);
console.log(add);
console.log(fruit);

console.log(fruit.length);

var addVeg = vegetables.push(3);
console.log(addVeg);
console.log(vegetables);

var food = fruit.concat(vegetables);
console.log(food);

var removedFood = food.splice(4,2);
console.log(removedFood);
console.log(food);

console.log(food.reverse());

console.log(food.toString(""));
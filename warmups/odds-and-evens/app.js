//Write a function below called "oddsAndEvens" that loops through a parameter "nums" (an array).
//for each number in the given array, if it is even, it is added to the evens array, if the number is odd, is added to the odds array.
var nums = [33, 56, 79, 88, 90]
var evens = []; // Do not edit this line.
var odds = []; // Do not edit this line.

//code here

var oddsAndEvens = function(nums) {
    for (i = 0; i < nums.length; i++) {    
        if (nums[i] % 2 === 0) {
            evens.push(nums[i]);
        }
                else {
                    odds.push(nums[i]);
            }
        }
    }        

oddsAndEvens(nums);
console.log(evens);
console.log(odds);


function printLetters(ourString) {
    for (var i = 0; i < ourString.length; i++) {
        console.log(ourString[i]);
    }
}

printLetters("You can do it!");

function findLetters(newString, character) {
    for (var i = 0; i < newString.length; i++) {
        if(newString[i] === character ){
        return i; 
        };
    }
        return "There was no " + character + " found";
}

console.log(findLetters("Go Simone", "e"));
console.log(findLetters("Go Simone", "m"));
console.log(findLetters("Go Simone", "o"));
console.log(findLetters("Go Simone", "x"));

//function myFunction(array) {
//    for ( var i= 0; i < array.length; i++) {
//        if (array[i] === 42) {
//        return;   
//        }
//    }
//    console.log("42 is not found");
//}
//
//myFunction([2, 4, 9, 22]);

function newFunction(myArray) {
    var lowestNumberThusFar = myArray[0];
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] < lowestNumberThusFar){
            lowestNumberThusFar = myArray[i];
        }
    } 
    return lowestNumberThusFar;
}
    
numbers = [10,9,8,7, 2, 6,5,4,3,2,1];

console.log(newFunction(numbers));
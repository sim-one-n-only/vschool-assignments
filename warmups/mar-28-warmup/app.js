//Given an array of mixed types, return an object or array with 4 arrays of their own type

var input = ["cat", [1, 2, 3], "dog", 1, 4, {
    name: "john"
}, ["pie", "cake"]];

var newArray = [];
var strArray = [];
var objectArray = [];
numberArray = [];


function sortArrays(thing) {
    for (var i = 0; i < thing.length; i++) {

        if (thing[i] instanceof Array) {
            newArray.push(thing[i])
        } else if (typeof (thing[i]) === "string") {

            strArray.push(thing[i])
        } else if (typeof (thing[i]) === "object") {

            objectArray.push(thing[i])
        } else if (typeof (thing[i]) === "number") {

            numberArray.push(thing[i]);
        }
    }
}

console.log(sortArrays(input));


//var input = ["cat", true, [1, 2, 3], "dog", 1, 4, {
//    name: "john"
//}, ["pie", "cake"]];
//
//function objectGenerator(input) {
//
//    var output = {
//        strings: [],
//        arrays: [],
//        objects: [],
//        numbers: [],
//        boolean: []
//    };
//
//    for (var i = 0; i < input.length; i++) {
//        if (typeof (input[i]) === "string") {
//            output.strings.push(input[i])
//        } else if (typeof (input[i]) === "number") {
//            output.numbers.push(input[i])
//        } else if (input[i] instanceof Array) {
//            output.arrays.push(input[i])
//        } else if (typeof (input[i]) === "object") {
//            output.objects.push(input[i])
//        } else if (typeof (input[i]) === "boolean") {
//            output.boolean.push(input[i])
//        }
//    }
//
//    console.log(output);
//}
//
//objectGenerator(input);
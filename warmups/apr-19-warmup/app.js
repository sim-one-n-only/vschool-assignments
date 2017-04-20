//Write a
//function that takes two arrays of equal length and makes
//an array of two propertied objects out of them:
//
//makeArrayOfObjects([4, 2, 5, 8], ["Sean", "Jared", "Marcy", "Mary"]) 
//=> [
//    {first: 4, second: "Sean"},
//    {first: 2, second: "Jared"},
//    {first: 5, second: "Marcy"},
//    {first: 8, second: "Mary"}
//]

//write a function that takes an object and makes an array out of its values.
//```makeArrayFromObject({name: "Jessica", age: 32, hobbies: ["dance", "MMA"], homeTown: "Beaver"} );
//=> ["Jessica", 32, ["dance", "MMA"], "Beaver"]
//```
//Ambitious option. Same as before, but the function takes one data type (string, object, number)
//and only returns those values of that type. If the input is object, it will return the objects and arrays.
//```makeArrayFromObject({name: "Jessica", age: 32, hobbies: ["dance", "MMA"], homeTown: "Beaver"}, "string");
//=> ["Jessica", "Beaver"]```

var makeArrayFromObject = {
    name: "Jessica",
    age: 32,
    hobbies: ["dance", "MMA"],
    homeTown: "Beaver"
};

var finalArray = [];

for (key in makeArrayFromObject) {
    //    if (makeArrayFromObject.hasOwnProperty(key) === "") {

    var value = makeArrayFromObject[key];
    finalArray.push(value);
    //    console.log(finalArray);
}

//}

console.log(finalArray);
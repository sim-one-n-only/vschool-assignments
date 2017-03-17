var string = "my-test";

function camelCase(string) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "-" || string[i] === " " || string[i] === "_") {
            newString += string[i + 1].toUpperCase();
            i++
        } else {
            newString += string[i]
        }
    }
    return newString;
}

console.log(camelCase("my-string"));
console.log(camelCase("my string"));
console.log(camelCase("my_string"));
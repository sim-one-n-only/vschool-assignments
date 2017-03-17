var input = 'bookkeeper larry';
var noDuplicates = [];
var duplicates = [];

function nodups(input) {
    for (var i = 0; i < input.length; i++) {
        if (noDuplicates.indexOf(input[i]) === -1) {
            noDuplicates.push(input[i]);
        } else {
            duplicates.push(input[i]);
        }
    }
    return noDuplicates + " " + duplicates;
}
console.log(nodups(input));
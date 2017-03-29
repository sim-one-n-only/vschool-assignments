//[ 'Jason', 'Parker', 'Simone' ] ---- write a function that takes an array of strings and returns an array with all the strings with double letters in them.
var newArray = [];
var firstArray = ["apple", "orange", "dog"]
var secondArray = ["people", "loose", "goose", "ruler", "soon"]

function doubleLetter(strArr) {
    for (var i = 0; i < strArr.length; i++) {
        for (var j = 0; j < strArr[i].length; j++)
            if (strArr[i][j] === strArr[i][j + 1]) {
                newArray.push(strArr[i]);
            }
    }
    console.log(newArray);
}

doubleLetter(firstArray);
doubleLetter(secondArray);
//var string = "Hello";
//
//function antiCaps() {
//    for (i = 0; i < string.length; i++) {
//        if (true) {
//            function isCaps(string) {
//                return string === string.toUpperCase();
//            }
//        } else {
//            return string === string.toLowerCase();
//        }
//    }
//}
//
//
//console.log(antiCaps(string));

function antiCaps(str) {
    va arr = [];
    for (var i = 0; i < str.length; i++) {
        if (isCAps(str[i])) {
            var newLetter = str[i].toLowerCase();;
        } else {
            car newLettr = str[i].toUpperCase();
        }
        arr.push(newLetter);
    }
}

function isCaps(letter) {
    return letter === letter.toUpperCase();
}

console.log(antiCaps("Hello"));


/////////

funtion antiCaps(str) {
    var output = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            output += str[i].toLowerCase();
        } else {
            output += str[i].toUpperCase();
        }
    }
    return output;
}

console.log(antiCaps("bAnAnA"));
var phrase = "Star Rats";
var phrase2 = "Is this a palindrome";


function palindrome(str) {
    str = str.toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    var reverse = str.split("").reverse().join("").toLowerCase();
    console.log(reverse);
    if (reverse === str) {
        console.log(true);
    } else {
        console.log(false);
    }
}


palindrome(phrase);
palindrome(phrase2);
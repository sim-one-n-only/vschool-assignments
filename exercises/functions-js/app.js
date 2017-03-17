var sum = function (num1, num2) {
    return num1 + num2;
}

console.log(sum(3, 5));


function largest(num1, num2, num3) {
    var max = Math.max(num1, num2, num3);
   return max;
   }

console.log(largest(87, 34534, 65346457));

var evenOdd = function(number) {
    if (number % 2 === 0) {
        return("even");
    } else {
        return("odd");
    }
}

console.log(evenOdd(68));

function words(string) {
    var string = (string);
    if (string.length <= 20 ) {
        return (string + string );
    } else if (string.length > 20) {
        return (string.slice(0,string.length / 2));
    }
}

console.log(words("VSchool is mad fun and I love it!"));
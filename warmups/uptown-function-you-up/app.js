var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function print(array) {
    var str = array.join (' ');
    console.log(str);
}

print(lyrics);

function reverseLyrics(array) {
    array.reverse();
    console.log(array.join(' '));
}

console.log(reverseLyrics(lyrics));

function everyOther(array) {
    for (i = 0; i < array.length; i++)
        if (i % 2 === 0) {
            console.log(array[i]);
        }
}

console.log(everyOther(lyrics));
//function b(lyrics) {
//    for (var i = 0; i = lyrics.length; i--) {
//        for(var a = 0; a = reverse.length; i++)
//            if ()
//        reverse.push(lyrics[i]);
//        }
//}
//        return reverse;
//}


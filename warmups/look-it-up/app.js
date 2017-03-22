function addWord(word, definition) {
    word = word.toLowerCase();
    dictionary[word] = definition;
}

var dictionary = {};

addWord('dog', 'an animal');

console.log(dictionary);

function findWords(word) {
    if (dictionary[word] === undefined) {
        console.log('this word is not in the dictionary');
    } else {
        return dictionary[word];
    }
}

console.log(findWords('cat'));
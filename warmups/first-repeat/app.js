function repeats(string) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] != string[i + 1] && string[i + 1] != string[i + 2]) {
            return string[i + 1];
        }
    }
}

console.log(repeats("gggggggxkljfvlsjkfg"));
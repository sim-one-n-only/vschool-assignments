var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Action to be performed when the document is read;
        var JSONResponse = parsePokemon(xhttp.responseText);
        pokemon(JSONResponse.results);
    }
};
xhttp.open("GET", "http://pokeapi.co/api/v2/pokemon/");
xhttp.send();

function parsePokemon(response) {
    response = JSON.parse(response);
    console.log(response);
    return response;
}

function pokemon(pokemonArray) {
    var list = document.getElementById("pokeList");
    for (var i = 0; i < pokemonArray.length; i++) {
        list.innerHTML += "<p>" + pokemonArray[i].name + "</p>";
        console.log(pokemonArray[i].name)
    }
}
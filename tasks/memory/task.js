let pokeArray = [];

function fetchPokemonData(pokemon) {
    let url = pokemon.url;
    return fetch(url)
        .then(response => response.json());
}

function fetchKantoPokemon() {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(response => response.json())
        .then(function (allpokemon) {
            return Promise.all(allpokemon.results.map(fetchPokemonData))
                .then(function (pokemons) {
                    return pokemons.map(function (pokemon) {
                        return {
                            name: pokemon.name,
                            sprite: pokemon.sprites.front_default,
                            types: pokemon.types.map(type => type.type.name)
                        };
                    });
                });
        });
}

if (localStorage.getItem("Pokemon") === null) {
    fetchKantoPokemon().then(function(pokemons) {
        pokeArray = pokemons;
        localStorage.setItem("pokemon", JSON.stringify(pokemons));
    });
} else {
    pokeArray = JSON.parse(localStorage.getItem("Pokemon"));
}
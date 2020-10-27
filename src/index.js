const API = 'https://pokeapi.co/api/v2/pokemon/';
let button = document.getElementById('btn');


button.addEventListener('click',() => {
    let input = document.getElementById('input').value;
    let img = document.getElementById('img');
    let pokeName = document.getElementById('pokeName');
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", `${API}${input}`);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let datoPokemon = JSON.parse(this.responseText);
            img.setAttribute("src",datoPokemon.sprites.front_default);
            pokeName.textContent = (datoPokemon.name)
        }
    }
})

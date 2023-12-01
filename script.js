const searchBar = document.querySelector('#input-text')
const autocompleteList = document.querySelector('#autocomplete-list')
let likedHeros = [];

searchBar.addEventListener('input', () => handleInput(searchBar.value))

async function handleInput(textSearched) {
    let response = await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${textSearched}&apikey=9ab871748d83ae2eb5527ffd69e034de&hash=d35377547e551cd64a60657d2517bb7f?ts=1`)
    let data = await response.json();
    // console.log(data);

    showResults(data.data.results)
}

function showResults(searchHero) {
    autocompleteList.innerHTML = ''
    for (let i = 0; i < 5; i++) {
        let result = document.createElement('div')
        result.classList.add('search-result-container')
        result.innerHTML = `
            <div class="search-character-container">
            <img src="${searchHero[i].thumbnail.path + '/portrait_medium.' + searchHero[i].thumbnail.extension}" alt="hero-image">
            <p>${searchHero[i].name}</p>
            </div>
            <div>Add</div>
        `
        autocompleteList.appendChild(result)
    }
}
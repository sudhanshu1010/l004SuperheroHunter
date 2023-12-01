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
    if(searchHero.length == 0){
        autocompleteList.innerHTML = 'No results'
    }

    autocompleteList.innerHTML = ''

    for (let i = 0; i < 5; i++) {
        let result = document.createElement('div')
        result.classList.add('search-result-container')
        result.innerHTML = `
            <div class="search-character-container">
            <img src="${searchHero[i].thumbnail.path + '/portrait_medium.' + searchHero[i].thumbnail.extension}" alt="hero-image">
            <p>${searchHero[i].name}</p>
            </div>
            <div class="add-to-fav">Like</div>
        `

        result.addEventListener('click', (e) => handleResult(e))
        // const addToFav = result.querySelector('.add-to-fav')
        // addToFav.addEventListener('click', (e) => handleAddToFav(e))

        autocompleteList.appendChild(result)
    }
}

function handleResult(event){
    console.log(event.target.innerHTML)
}

function handleAddToFav(event){
    console.log(event)
}

// var url1 = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${textSearched}&ts=1701433229367&apikey=218c68db0b36c6f579524361323e364e&hash=44c8c3561619b97b9d4fa77fcb3b6334'
// var url2 = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${textSearched}&ts=1698253966886&apikey=1af980c964ec89cd3e70a22841cd6680&hash=dc49b569cadd957b690091d2ae379c65'
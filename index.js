document.addEventListener('DOMContentLoaded', () => console.log('content loaded and parsed'))

//fetch brewery data
function breweryData(brewery){
    fetch(brewery)
        .then(resp => resp.json())
        .then(data => console.log(data))
}
breweryData('https://api.openbrewerydb.org/breweries')
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

fetchBooks()

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks()
// })

// fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(json => json.map(book => book["numberOfPages"]));


//  const reducer = (accumulator, currentValue) => accumulator + currentValue;
//  fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(json => json.map(book => book["numberOfPages"]).reduce 

var books = document.querySelectorAll('#book-list li .name');
// console.log(books);

Array.from(books).forEach(function(book) {
  book.textContent += '(book title)';
})

const bookList = document.querySelector('#book-list');

// This will replace all the h2 tag
// bookList.innerHTML = '<h2>Books and more books...</h2>';

// This will add p tag
bookList.innerHTML += '<p>This is how you add HTML</p>'

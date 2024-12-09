const myLibrary = [];

function Book(name, author, pageCount, haveRead) {
  this.name = name;
  this.author = author;
  this.pageCount = pageCount;
  this.haveRead = haveRead;
}

function addBookToLibrary(name, author, pageCount, haveRead) {
  const book = new Book(name, author, pageCount, haveRead);
  myLibrary.push(book);
  return book;
}

addBookToLibrary('The Hunger Games', 'Suzzane, Collins', 400, false);
addBookToLibrary('The Hunger Games - Catching Fire', 'Suzzane, Collins', 391, false); 
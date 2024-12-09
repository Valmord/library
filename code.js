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
addBookToLibrary('The Hunger Games', 'Suzzane, Collins', 400, false);
addBookToLibrary('The Hunger Games', 'Suzzane, Collins', 400, false);
addBookToLibrary('The Hunger Games', 'Suzzane, Collins', 400, false);
addBookToLibrary('The Hunger Games', 'Suzzane, Collins', 400, false);


function displayBooks(){
  const table = document.querySelector('table');
  myLibrary.forEach(book => {
    const bookContainer = document.createElement('tr');
    for (prop in book) {
      const bookElement = document.createElement('td');
      bookElement.textContent = book[prop];
      bookContainer.appendChild(bookElement);
    }
    table.appendChild(bookContainer);
  })
}

displayBooks();

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.add-book');
const closeModal = document.querySelector('.close-modal');
openModal.addEventListener('click', () => modal.classList.toggle('hidden'));
closeModal.addEventListener('click', () => modal.classList.toggle('hidden'));
modal.addEventListener('click', event => {
  console.log(event.target);
  if (event.target !== modal) {
    return;
  }
  modal.classList.toggle('hidden')
});
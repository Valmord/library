const myLibrary = [];

function Book(name, author, pageCount, haveRead) {
  this.name = name;
  this.author = author;
  this.pageCount = pageCount;
  this.haveRead = haveRead;
}

function addBookToLibrary(name, author, pageCount, haveRead) {
  author = author || 'unknown';
  pageCount = pageCount || 0;
  haveRead = haveRead ? 'read' : 'not read';
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

const table = document.querySelector('table');
function displayBooks(){
  myLibrary.forEach(displayBook);
}


function displayBook(book){
  const bookContainer = document.createElement('tr');
  for (prop in book) {
    const bookElement = document.createElement('td');
    bookElement.textContent = book[prop];
    bookContainer.appendChild(bookElement);
  }
  table.appendChild(bookContainer);
}
displayBooks();


const modal = document.querySelector('.modal');
const openModal = document.querySelector('.add-book');
const closeModal = document.querySelector('.close-modal');
const modalForm = document.querySelector('#add-book-form');

openModal.addEventListener('click', () => modal.classList.toggle('hidden'));
closeModal.addEventListener('click', event => {
  modal.classList.toggle('hidden')
  event.stopPropagation();
  clearModal();
})
modal.addEventListener('click', event => {
  if (event.target !== modal) {
    return;
  }
  modal.classList.toggle('hidden')
});


const modalBookName = document.querySelector('#name');
const modalBookAuthor = document.querySelector('#author');
const modalBookPages = document.querySelector('#pages');
const modalHaveRead = document.querySelector('#read');
const addBookBtn = document.querySelector('.modal-add-but');



addBookBtn.addEventListener('click', event => {
  event.stopPropagation();
  if (modalForm.checkValidity()) {
    const book = addBookToLibrary(modalBookName.value,modalBookAuthor.value,modalBookPages.value,modalHaveRead.checked);
    displayBook(book);
    clearModal();
    event.preventDefault();
  }
})

function clearModal(){
  [modalBookName.value,
  modalBookAuthor.value,
  modalBookPages.value,
  modalHaveRead.checked] = ['','','',false];
}
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

function addDeleteListener(button){
  button.addEventListener('click', () => {
    deleteElement(button);
  })
}

function deleteElement(ele){
  myLibrary.splice(ele.dataset.index,1);
  ele.parentElement.remove();
  updateBookNumbers();
}

function updateBookNumbers(){
  const bookNumElements = document.querySelectorAll('.book-num');
  bookNumElements.forEach( (element, index) => {
    element.textContent = index + 1;
  })
}

function createDeleteElement(index){
  const deleteElement = document.createElement('td');
  deleteElement.textContent = 'X';
  deleteElement.classList.add('delete-but');
  deleteElement.dataset.index = index;
  addDeleteListener(deleteElement);
  return deleteElement;
}

function createNumElement(index){
  const numElement = document.createElement('td');
  numElement.textContent = +index + 1;
  numElement.classList.add('book-num');
  return numElement;
}

function displayBook(book,index){
  const bookContainer = document.createElement('tr');
  bookContainer.appendChild(createNumElement(index));
  for (prop in book) {
    const bookElement = document.createElement('td');
    bookElement.textContent = book[prop];
    bookContainer.appendChild(bookElement);
  }
  bookContainer.appendChild(createDeleteElement(index));


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
    const book = addBookToLibrary(modalBookName.value,modalBookAuthor.value,
    modalBookPages.value,modalHaveRead.checked);
    displayBook(book, myLibrary.length-1);
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


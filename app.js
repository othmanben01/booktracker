// State
const state = {
  book: null,
  books: null
};
// event listener call back functions
const submitHandler = e => {
  e.preventDefault();
  // get inputs from the UI
  const title = UI.getTitleValue();
  const author = UI.getAuthorValue();
  const isbn = UI.getIsbnValue();
  // Validation
  if (!title || !author || !isbn) {
    // show failure alert
    UI.showAlert("Please fill in all fields")("error");
  } else {
    // create a new Book
    state.book = new Book(title, author, isbn);
    // adding book to the localStorage
    state.books.push(state.book);
    LocalStorage.updateKeyValue("books", state.books);
    // clear inputs
    UI.resetInputs();

    // render the book row to the UI
    UI.renderBookRow(state.book);
    // show success alert
    UI.showAlert("Book Added!")("success");
  }
};

// when delete btn clicked
deleteRowHandler = e => {
  e.preventDefault();

  if (e.target.classList.contains("delete")) {
    // delete the book from the UI
    const bookIdDel = UI.deleteBookRow(e);
    state.books = Book.deleteBookFromList(state.books, bookIdDel);
    // update LocalStorage: remove book
    LocalStorage.updateKeyValue("books", state.books);
    // show a delete message alert
    UI.showAlert("Book Removed!")("success");
  }
};

// LocalStorage handler
const localStorageHandler = e => {
  e.preventDefault();
  // init local storage if needed
  if (!JSON.parse(localStorage.getItem("books"))) {
    state.books = [];
    LocalStorage.initKey("books", []);
  } else {
    // else render all the books
    state.books = LocalStorage.getKeyValue("books");
    UI.renderBookRows(state.books);
  }
};

// Event Listeners
const eventListenerHandler = () => {
  // adding persistent data to localStorage
  window.addEventListener("load", localStorageHandler);
  // adding event listener to the form
  base.form.addEventListener("submit", submitHandler);
  base.bookList.addEventListener("click", deleteRowHandler);
};

eventListenerHandler();

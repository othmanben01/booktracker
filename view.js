class UI {
  // Getters
  static getTitleValue = () => {
    return base.title.value;
  };
  static getAuthorValue = () => {
    return base.author.value;
  };
  static getIsbnValue = () => {
    return base.isbn.value;
  };

  // Setters

  // clear Inputs
  static resetInputs = () => {
    [base.title, base.author, base.isbn].forEach(el => {
      el.value = "";
    });
  };

  // add Book to list
  static renderBookRows = books => {
    books.map(book => {
      this.renderBookRow(book);
    });
  };
  static renderBookRow = book => {
    const row = this.createBookRow(book);
    base.bookList.insertAdjacentHTML("afterbegin", row);
  };

  static createBookRow = book => {
    const row = `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
      </tr>
    `;
    return row;
  };

  // delete a book row from the list
  static deleteBookRow = e => {
    const id = e.target.parentElement.previousElementSibling.textContent;
    e.target.closest("tr").remove();
    return id;
  };

  // Show Alert
  static showAlert = message => className => {
    const alertDiv = `
      <div class="alert ${className}">
        ${message}
      </div>
    `;
    base.form.insertAdjacentHTML("beforebegin", alertDiv);
    // TimeOut after 3 sec
    setTimeout(() => {
      this.removeAlert();
    }, 3000);
  };
  // Remove alert
  static removeAlert = () => {
    document.querySelector(".alert").remove();
  };
}

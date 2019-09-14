class Book {
  constructor(title, author, isbn) {
    this.title = title.toLowerCase();
    this.author = author.toLowerCase();
    this.isbn = isbn.toLowerCase();
  }
  // Getters
  getTitle = () => {
    return this.title;
  };
  getAuthor = () => {
    return this.author;
  };
  getIsbn = () => {
    return this.isbn;
  };

  static deleteBookFromList = (books, id) => {
    return books.filter(book => {
      return book.isbn !== id;
    });
  };
}

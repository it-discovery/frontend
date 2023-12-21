'use strict';

class Book {
    constructor(title, author, publisher, pages, year) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.pages = pages;
        this.year = year;
    }
}

class BookStorage {
    static #instance;

    books = [];

    static {
        this.#instance = new BookStorage();
    }

    static getInstance() {
        return this.#instance;
    }

    addBook(title, author, publisher, pages, year) {
        this.books.push(new Book(title, author, publisher, pages, year));
    }

    displayBooks() {
        let text = '';
        for (let book of this.books) {
            text += `title: ${book.title}, author: ${book.author}`;
        }
        updateHTML('bookList', text);

    }
}

class Author {

}

class Order {

}

class Publisher {

}

class User {

}

function getInputValue(elementId) {

    const inputElement = document.getElementById(elementId);
    return inputElement.value;
}

function updateHTML(elementId, value) {

    const inputElement = document.getElementById(elementId);
    inputElement.innerHTML = value;
}

document.getElementById('addBook').addEventListener('click', () => {
    const title = getInputValue('inputTitle');
    const publisher = getInputValue('inputPublisher');
    const pages = getInputValue('inputPages');
    const author = getInputValue('inputAuthor');
    const year = getInputValue('inputYear');

    BookStorage.getInstance().addBook(title, author, publisher, pages, year);
    BookStorage.getInstance().displayBooks();
});

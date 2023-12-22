// @ts-ignore
import {getInputValue, updateHTML} from "./js/utils.js";

class Book {
    constructor(public title: string, public author: string, private publisher: string,
                private pages: number, private year: number) {
    }
}

class BookStorage {
    static #instance: BookStorage;

    books: Book[] = [];

    static {
        this.#instance = new BookStorage();
    }

    static getInstance(): BookStorage {
        return this.#instance;
    }

    addBook(title: string, author: string, publisher: string, pages: number, year: number): void {
        this.books.push(new Book(title, author, publisher, pages, year));
    }

    displayBooks(): void {
        let text = '';
        for (let book of this.books) {
            text += `title: ${book.title}, author: ${book.author}`;
        }
        updateHTML('bookList', text);
    }

    //TODO
    searchBooks(title: string, author: string) {

    }
}

// TODO homework

class Author {

}

class Order {

}

class Publisher {

}

class User {

}

document.getElementById('addBook')?.addEventListener('click', () => {
    const title = getInputValue('inputTitle');
    const publisher = getInputValue('inputPublisher');
    const pages = getInputValue('inputPages');
    const author = getInputValue('inputAuthor');
    const year = getInputValue('inputYear');

    BookStorage.getInstance().addBook(title, author, publisher, pages, year);
    BookStorage.getInstance().displayBooks();
});

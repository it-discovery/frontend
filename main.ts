// @ts-ignore
import {getInputValue, updateHTML} from "./js/utils.js";

class Book {
    constructor(public title: string, public author: string, private publisher: string,
                private pages: number, private year: number) {
    }

    match(title?: string, author?: string): boolean {
        //TODO implement
        return true;
    }

    getGeneralInformation() : string {
        return `title: ${this.title}, author: ${this.author}`;
    }
}

interface BookStore {
    type: string;

    getBooks(): Book[];

    addBook(book: Book): void;

    search(title?: string, author?: string): Book[];
}

class InMemoryBookStore implements BookStore {

    private readonly books: Book[] = [];

    type = 'In-memory';

    getBooks(): Book[] {
        return this.books;
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    search(title?: string | undefined, author?: string | undefined): Book[] {
        return this.books.filter(book => book.match(title, author));
    }
}

class BookStorage {
    static #instance: BookStorage;

    private readonly bookStore: BookStore = new InMemoryBookStore();

    static {
        this.#instance = new BookStorage();
    }

    static getInstance(): BookStorage {
        return this.#instance;
    }

    addBook(title: string, author: string, publisher: string, pages: number, year: number): void {
        this.bookStore.addBook(new Book(title, author, publisher, pages, year));
    }

    displayBooks(): void {
        let text = '';
        for (let book of this.bookStore.getBooks()) {
            text += book.getGeneralInformation();
        }
        updateHTML('bookList', text);
    }

    searchBooks(title?: string, author?: string): Book[] {
        return this.bookStore.search(title, author);
    }
}

// TODO homework

abstract class Human {
    protected constructor(private name: string, private birthDate: Date) {
    }
}

class Author extends Human {

    constructor(private books: Book[], name: string, birthDate: Date) {
        super(name, birthDate);
    }
}

class Order {

}

class Publisher {

}

class User extends Human {

    constructor(private orders: Order[], name: string, birthDate: Date) {
        super(name, birthDate);
    }
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

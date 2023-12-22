import {getInputValue, updateHTML} from "./js/utils.js";

export class Book {
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

export interface BookStore {
    type: string;

    getBooks(): Book[];

    addBook(book: Book): void;

    search(title?: string, author?: string): Book[];
}

export class InMemoryBookStore implements BookStore {

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

export class BookStorage {
    static #instance: BookStorage;

    private readonly bookStore: BookStore = new InMemoryBookStore();

    static {
        this.#instance = new BookStorage();
    }

    static getInstance(): BookStorage {
        return this.#instance;
    }

    //@logMethod
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
    const pages = Number(getInputValue('inputPages'));
    const author = getInputValue('inputAuthor');
    const year = Number(getInputValue('inputYear'));

    BookStorage.getInstance().addBook(title, author, publisher, pages, year);
    BookStorage.getInstance().displayBooks();
});

function logMethod(originalMethod: any, context: ClassMethodDecoratorContext) {

    const methodName = String(context.name);

    function addLogging(this: any, args: any[]) {
        console.log(`Entered method: ${methodName}`);
        const result = originalMethod.call(this, ...args);
        console.log(`Finished method: ${methodName}`);
        return result;
    }
}
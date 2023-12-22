import {Book, BookStore, InMemoryBookStore} from './main';

let store: BookStore;

beforeEach(() => {
    store = new InMemoryBookStore();
})

describe("getBooks", () => {
    test('Book store in initial state contains no books', () => {
        expect(store.getBooks().length).toBe(0);
    });

    test("Book store contains single book after addBook call", () => {
        store.addBook(new Book("Jest", "N/A", "Manning", 200, 2023));
        expect(store.getBooks().length).toBe(1);
    })
})
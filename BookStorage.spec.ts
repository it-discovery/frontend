import {Book, BookStorage, InMemoryBookStore} from "./main";


describe("searchBooks", () => {
    test("searchBooks method filters books by name", () => {
        const expected = [new Book("Jest", "N/A", "Manning", 200, 2023)];
        jest.spyOn(InMemoryBookStore.prototype, 'search')
            .mockImplementation((title, author) => expected);
        const books = BookStorage.getInstance().searchBooks('', '');
        expect(books).toEqual(expected);
    });
});
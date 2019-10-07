const BookRepository = require('./book.repository');





describe('Book repository Save', function () {

const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };

    test('Save a book', () => {
        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});
        expect(dbMock.write.mock.calls.length).toBe(1);
    });
});


describe('Book repository Total count', function () {

    const dbMock = {
            get : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(2)
        };


    test('Count Total => 3', () => {
        const repository = new BookRepository(dbMock);
        expect(repository.getTotalCount()).toBe(2);
    });

});

describe('Book repository Total price', function () {
    const dbMock = {
            get : jest.fn().mockReturnThis(),
            map : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(30)
        };

    test('Count Total Price => 30', () => {

        const repository = new BookRepository(dbMock);
        expect(repository.getTotalPrice()).toBe(30);
    });

});
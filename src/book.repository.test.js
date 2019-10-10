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


//###########
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

//###########
describe('Book repository Total price', function () {
    const dbMock = {
            get : jest.fn().mockReturnThis(),
            map : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValueOnce([15.0, 5.0, 10.0])
        };

    test('Count Total Price => 30', () => {

        const repository = new BookRepository(dbMock);
        expect(repository.getTotalPrice()).toBe(30.0);
    });

});

//###########
describe('Book repository find by name', function () {

    var one_piece = {"id": 2, "name": "One piece", "price": 7.5, "added_at": "2019-01-10"};

    const dbMock = {
            get : jest.fn().mockReturnThis(),
            find : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(one_piece)
        };

    test('get book by Name ', () => {

        const repository = new BookRepository(dbMock);
        expect(repository.getBookByName("One piece")).toEqual(one_piece);
    });

});


//###########
describe('Book repository find by name', function () {

    var livres = [
                        {"id": 2, "name": "One piece", "price": 7.5, "added_at": "2019-01-10"},
                        {"id": 3, "name": "Naruto", "price": 7.5, "added_at": "2018-02-10"},
                        {"id": 4, "name": "Kimetsu", "price": 7.5, "added_at": "2017-02-10"}
                 ];

    var reponse = [
                    {year: 2017, month: 2, count:1, count_cumulative:1},
                    {year: 2018, month: 2, count:1, count_cumulative:2},
                    {year: 2019, month: 1, count:1, count_cumulative:3}
                    ];
     
    const dbMock = {
            get : jest.fn().mockReturnThis(),
            sortby : jest.fn().mockReturnThis()
        };

    test('get book by Name ', () => {

        const repository = new BookRepository(dbMock);
        expect(repository.getCountBookAddedByMont()).toEqual(reponse);
    });

});
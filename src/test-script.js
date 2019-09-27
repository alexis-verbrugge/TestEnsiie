const BookRepository = require('./book.repository');
const db = require('./db')

const repository = new BookRepository(db);


repository.save({
    'id' : 1,
    "name" :"test",
    'price' :6.1,
    "added_at" : '2019-01-01'
});

repository.save({
    'id' : 2,
    "name" :"One piece",
    'price' :7.5,
    "added_at" : '2019-01-10'
});

repository.save({
    'id' : 3,
    "name" :"Naruto",
    'price' :6.3,
    "added_at" : '2009-01-06'
});

repository.save({
    'id' : 4,
    "name" :"Harry Potter",
    'price' :10.5,
    "added_at" : '1790-01-06'
});
class BookRepository {

    /**
     * @param db
     */
    constructor(db) {
        this.db = db;
    }

    save (book) {
        this.db.get('books').push(book).write();
    }

    /**
     * Nombre total de livre
     */
    getTotalCount() {
        var total = this.db.get('books').size().value();
        return total
    }

    /**
     * Somme du prix de tous les livre
     */
    getTotalPrice() {
        var prices = this.db.get('books').map('price').value()
        var total = 0
        for (var i=0; i<prices.length; i++) {
            total+=prices[i];
        }
        return total;
    }


    /**
     * Retourne un livre
     */
    getBookByName(bookName) {
        var book = this.db.get('books')
        .find({ name: bookName })
        .value();
        return book;
    }

    /**
     * Nombre de livre ajouté par mois
     *
     *  [
     *      {
     *          year: 2017,
     *          month, 2,
     *          count, 129,
     *          count_cumulative: 129
     *      },
     *      {
     *          year: 2017,
     *          month, 3,
     *          count, 200,
     *          count_cumulative: 329
     *      },
     *      ....
     *  ]
     */
    getCountBookAddedByMont() {
        var books = this.db.get('books').sortby('date');
        var tab_cumul = {};

        for (var i=0; i<books.length; i++) {
            var date = books[i].date;
            var s_date = split(date);
            var annee = s_date[0];
            var mois = s_date[1];
            var couple = annee+"-"+mois;
            if (couple in tab_cumul) {
                tab_cumul[couple].count+=1;
            } else {
                tab_cumul[couple]={year: annee, month: mois, count:1, count_cumulative:0};
            }

            console.log(tab_cumul);
        }

        for (var j=0; j<tab_cumul.length; i++) {
            if (j==0) {
                tab_cumul[j].count_cumulative=count;
            } else {
                tab_cumul[j].count_cumulative=count+tab_cumul[j-1].count;
            }
        }
        return tab_cumul;
    }

}


module.exports = BookRepository;
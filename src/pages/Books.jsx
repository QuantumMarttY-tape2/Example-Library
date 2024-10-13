import React, { useState } from 'react';
import Book from '../components/ui/Book';

const Books = ({ books: initialBooks }) => {
    const [books, setBooks] = useState(initialBooks);

    function filterBooks(filter) {
        if (filter === "LOW_TO_HIGH") {
            setBooks(
            books.slice().sort((a, b) => 
                (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)))
        }
        else if (filter === "HIGH_TO_LOW") {
            setBooks(
            books.slice().sort((b, a) => 
                (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)))
        }
        else if (filter === "RATING") {
            setBooks(
            books.slice().sort((b, a) => 
                (a.rating - b.rating)))
        }
    }
    return (
        <div className="books__body">
            <main id="books__main">
                <section>
                    <div className="books__container">
                        <div className="row">
                            <div className="books__header">
                                <h2 className='section__title books__header--title'>All Books</h2>
                                <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                                    <option value="DEFAULT" disabled>Sort</option>
                                    <option value="LOW_TO_HIGH">Price: low to high</option>
                                    <option value="HIGH_TO_LOW">Price: high to low</option>
                                    <option value="RATING">Rating: high to low</option>
                                </select>
                            </div>
                            <div className="books">
                                {books.map(book => (
                                    <Book book={book} key={book.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Books;
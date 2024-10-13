import React from 'react';
import UndrawBooks from "../assets/Undraw_Books.svg"
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <section id='landing'>
            <div className="header__container">
                <div className="header__description">
                    <h1>Best book platform in Wonderland</h1>
                    <h2>Good luck finding your dream book with <span className='purple'>MAGIC</span></h2>
                    <Link to="#features">
                        <button className="btn">Browse Books</button>
                    </Link>
                </div>
                <figure className="header__img--wrapper">
                    <img src={UndrawBooks} alt="" />
                </figure>
            </div>
        </section>
    );
}

export default Landing;
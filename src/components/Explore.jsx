import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
    return (
        <section id="explore">
            <div className="container">
                <div className="row row__column">
                    <h2>Explore more in <span className="purple">Wonderland</span></h2>
                <Link to="/books">
                    <button className="btn">Open World Exploration</button>
                </Link>
                </div>
            </div>
        </section>
    );
}

export default Explore;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Highlight from './ui/Highlight';

const Highlights = () => {
    return (
        <section id='highlights'>
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight
                            icon={<FontAwesomeIcon icon="bolt" />}
                            title="Journey with Alice"
                            para="Rare exploration experience."/>
                        <Highlight
                            icon={<FontAwesomeIcon icon="book-open" />}
                            title="Endless Rabbit Holes"
                            para="Books are everywhere."/>
                        <Highlight
                            icon={<FontAwesomeIcon icon="tags" />}
                            title="Open-world Friendly"
                            para="Books are free, if you can find them."/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;
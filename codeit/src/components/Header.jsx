import React from 'react';
import '../../src/assets/Header.scss';

const Header = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="header">
            <nav>
                <ul>
                    <li onClick={() => scrollToSection('about')}>ABOUT</li>
                    <li onClick={() => scrollToSection('roadmap')}>ROADMAP</li>
                    <li onClick={() => scrollToSection('review')}>REVIEW</li>
                    <li onClick={() => scrollToSection('recruit')}>RECRUIT</li>
                    <li onClick={() => scrollToSection('footer')}>GUESTBOOK</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

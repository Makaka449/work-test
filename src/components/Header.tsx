import React, { useState } from 'react';
import '../styles/Header.scss';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="header">
            <a href="/" className="logo">Логотип</a>
            <nav className={`navbar ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li><a className='navbara' href="/page1">Сторінка 1</a></li>
                    <li><a className='navbara' href="/page2">Сторінка 2</a></li>
                    <li><a className='navbara' href="/page3">Сторінка 3</a></li>
                    <li><a className='navbara' href="/page4">Сторінка 4</a></li>
                    <li><a className='navbara' href="/page5">Сторінка 5</a></li>
                    <li><a className='navbara' href="/page6">Сторінка 6</a></li>
                    <li><a className='navbara' href="/page7">Сторінка 7</a></li>
                </ul>
            </nav>
            <div className='menu-tab-div'>
                <button className="menu-button" onClick={toggleMenu}>Меню</button>
            </div>
            
            {isOpen && (
                <div className="mobile-menu">
                    <ul>
                        <li><a href="/page1" onClick={closeMenu}>Сторінка 1</a></li>
                        <li><a href="/page2" onClick={closeMenu}>Сторінка 2</a></li>
                        <li><a href="/page3" onClick={closeMenu}>Сторінка 3</a></li>
                        <li><a href="/page4" onClick={closeMenu}>Сторінка 4</a></li>
                        <li><a href="/page5" onClick={closeMenu}>Сторінка 5</a></li>
                        <li><a href="/page6" onClick={closeMenu}>Сторінка 6</a></li>
                        <li><a href="/page7" onClick={closeMenu}>Сторінка 7</a></li>
                        <li><button className='logout-button' onClick={closeMenu}>Вихід</button></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;

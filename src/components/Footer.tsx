import React from 'react';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="contact-form">
                <h2>Зворотний зв'язок</h2>
                <form id="contact-form">
                    <label htmlFor="name">Ім'я:</label>
                    <input type="text" id="name" name="name" required />
                    
                    <label htmlFor="email">Електронна пошта:</label>
                    <input type="email" id="email" name="email" required />
                    
                    <label htmlFor="message">Повідомлення:</label>
                    <textarea id="message" name="message" required></textarea>
                    
                    <button type="submit">Відправити</button>
                </form>
            </div>
            <div className="links">
                <a href="/page1">Сторінка 1</a>
                <a href="/page2">Сторінка 2</a>
                <a href="/page3">Сторінка 3</a>
                <a href="/page4">Сторінка 4</a>
                <a href="/page5">Сторінка 5</a>
                <a href="/page6">Сторінка 6</a>
                <a href="/page7">Сторінка 7</a>
            </div>
        </footer>
    );
};

export default Footer;

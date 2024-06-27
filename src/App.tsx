import React from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Slider from './components/Slider';
import News from './components/News';

import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Slider />
                <br></br>
                <div className="content">
                    <News />
                    <br></br>
                </div>
                <br></br>
            </main>
            <br></br>
            <Footer />
        </div>
    );
};

export default App;

import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Review from './components/Review';
import Recruit from './components/Recruit';
import Footer from './components/Footer';
import '../src/assets/index.scss';


const App = () => {
    return (
        <div>
            <Home />
            <Header />
            <About />
            <Roadmap />
            <Review />
            <Recruit />
            <Footer />
        </div>
    );
};

export default App;

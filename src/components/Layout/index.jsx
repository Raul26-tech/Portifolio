import React from 'react';
import About from '../About';
import Works from '../Works';
import Tecnologies from '../Tecnologies';
import Projects from '../Projects';
import Footer from '../Footer';
import Home from '../Home';

export default function Layout() {
    return (
        <>
            <Home />
            <About />
            <Works />
            <Tecnologies />
            <Projects />
            <Footer />
        </>
    );
}

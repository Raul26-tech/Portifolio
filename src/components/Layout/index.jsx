import React from 'react';
import Header from '../Header';
import Animation from '../Animation';
import About from '../About';
import Works from '../Works';
import Tecnologies from '../Tecnologies';
import Projects from '../Projects';
import Footer from '../Footer';

export default function Layout() {
    return (
        <>
            <div className="w-full h-screen flex flex-col overflow-y-auto">
                <Header />
                <section className="w-full h-[30rem] md:h-[15rem] flex flex-col bg-gradient-to-r from-gray-800 to-theme-blue-dark-gray-100">
                    <Animation />
                </section>
                <div className="bg-gradient-to-r from-gray-800 to-theme-blue-dark-gray-100">
                    <img
                        className="w-full"
                        src="../src/assets/footerSection.png"
                        alt=""
                    />
                </div>
                <About />
                <Works />
                <Tecnologies />
                <Projects />
                <Footer />
            </div>
        </>
    );
}

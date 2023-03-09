import React from 'react';
import Header from '../Header/index';
import Animation from '../Animation';

export default function Home() {
    return (
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
        </div>
    );
}

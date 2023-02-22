import React from 'react';
import Header from '../Header';
import Animation from '../Animation';

export default function Layout() {
    return (
        <>
            <div className="w-screen h-screen flex flex-col z-10 ">
                <Header />
                <section className="w-full h-[30rem] flex bg-gradient-to-r from-gray-500 to-theme-blue-dark-gray-150">
                    <Animation />
                </section>
            </div>
        </>
    );
}

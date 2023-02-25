import React from 'react';
import Header from '../Header';
import Animation from '../Animation';

export default function Layout() {
    return (
        <>
            <div className="w-full h-screen flex flex-col overflow-y-auto">
                <Header />
                <section className="w-full h-[15rem] flex flex-col bg-gradient-to-r from-gray-500 to-theme-blue-dark-gray-150">
                    <Animation />
                </section>
                <div className="bg-gradient-to-r from-gray-500 to-theme-blue-dark-gray-150">
                    <img
                        className="w-full"
                        src="../src/assets/footerSection.png"
                        alt=""
                    />
                </div>
                <div className="bg-red-300 mt-3">Proxima sessão</div>
            </div>
        </>
    );
}

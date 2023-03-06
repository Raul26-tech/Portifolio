import React, { useState } from 'react';
import { HiMenu, HiX, HiMoon } from 'react-icons/hi';
import { BiCode, BiCodeAlt } from 'react-icons/bi';

export default function Header() {
    const [showMenuMobile, setShowMenuMobile] = useState(false);

    const handleShowMenu = () => {
        setShowMenuMobile((prevState) => !prevState);
    };

    return (
        <>
            <div className="w-full h-[5rem] z-10 flex items-center justify-between relative p-12 bg-gradient-to-r from-gray-800 to-theme-blue-dark-gray-100">
                <div className="w-full flex justify-between items-center md:hidden">
                    <button
                        className="w-[5rem] md:hidden text-white"
                        onClick={handleShowMenu}
                    >
                        <HiMenu size={24} />
                    </button>
                    <div className="w-[3rem] flex m-4 rounded-xl bg-red-300 ">
                        <button className="w-full h-auto p-1 flex justify-center items-center text-white rounded-lg bg-theme-blue">
                            <HiMoon />
                        </button>
                    </div>
                </div>
                <div className="w-full justify-between hidden md:flex">
                    <div className="flex justify-start items-center p-1 text-white">
                        <BiCode size={24} style={{ color: '#2596FF' }} />
                        <span className="m-1">Raul</span>
                        <BiCodeAlt size={24} style={{ color: '#2596FF' }} />
                    </div>
                    <ul className="list-none flex justify-center items-center p-4">
                        <li className="font-roboto p-4 transition duration-100 text-white hover:text-blue-400 hover:border-b-2 hover:border-theme-blue-hover">
                            Home
                        </li>
                        <li className="font-roboto p-4 transition duration-100 text-white hover:text-blue-400 hover:border-b-2 hover:border-theme-blue-hover">
                            Sobre
                        </li>
                        <li className="font-roboto p-4 transition duration-100 text-white hover:text-blue-400 hover:border-b-2 hover:border-theme-blue-hover">
                            Experiências
                        </li>
                        <li className="font-roboto p-4 transition duration-100 text-white hover:text-blue-400 hover:border-b-2 hover:border-theme-blue-hover">
                            Projetos
                        </li>
                        <li className="font-roboto p-4 transition duration-100 text-white hover:text-blue-400 hover:border-b-2 hover:border-theme-blue-hover">
                            Contato
                        </li>
                        <div className="w-[3rem] flex  m-4 rounded-xl bg-red-300 ">
                            <button className="w-full h-auto p-1 flex justify-center items-center text-white rounded-lg bg-theme-blue">
                                <HiMoon />
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
            {showMenuMobile && (
                <>
                    <div className="w-[18rem] z-50 h-full p-8 shadow-lg md:shadow-2xl bg-gradient-to-r from-gray-800 to-theme-blue-dark-gray-100 absolute inset-0 md:hidden">
                        <div className="w-auto flex justify-end">
                            <button
                                onClick={handleShowMenu}
                                className="text-white"
                            >
                                <HiX size={24} />
                            </button>
                        </div>
                        <div className="w-full h-[30rem] flex mt-6">
                            <ul className="list-none flex flex-col justify-start 8items-start p-4">
                                <li className="font-roboto p-4 transition duration-100 text-white hover:text-blue-400 hover:border-b-2 hover:border-theme-blue-hover">
                                    Home
                                </li>
                                <li className="font-roboto p-4 transition duration-100 text-white hover:text-blue-400 hover:border-b-2 hover:border-theme-blue-hover">
                                    Sobre
                                </li>
                                <li className="font-roboto p-4 transition duration-100 text-white hover:text-blue-400 hover:border-b-2 hover:border-theme-blue-hover">
                                    Experiências
                                </li>
                                <li className="font-roboto p-4 transition duration-100 text-white hover:text-blue-400 hover:border-b-2 hover:border-theme-blue-hover">
                                    Projetos
                                </li>
                                <li className="font-roboto p-4 transition duration-100 text-white hover:text-blue-400 hover:border-b-2 hover:border-theme-blue-hover">
                                    Contato
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

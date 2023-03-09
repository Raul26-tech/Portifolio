import React, { useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { BiCode, BiCodeAlt } from 'react-icons/bi';

export default function Header() {
    const [theme, setTheme] = useState(false);

    return (
        <>
            <div className="w-full h-[5rem] flex items-center justify-between p-12 bg-gradient-to-r from-gray-800 to-theme-blue-dark-gray-100">
                <div className="flex justify-center items-center text-white">
                    <BiCode size={24} style={{ color: '#2596FF' }} />
                    <span className="m-1">Raul</span>
                    <BiCodeAlt size={24} style={{ color: '#2596FF' }} />
                </div>
                <div className="w-[5rem] h-[5rem] p-3 flex justify-center items-center">
                    <button
                        className="w-full h-[2rem] flex justify-center items-center text-white rounded-lg bg-theme-blue"
                        onClick={() => setTheme((prevState) => !prevState)}
                    >
                        {theme ? <HiSun /> : <HiMoon />}
                    </button>
                </div>
            </div>
        </>
    );
}

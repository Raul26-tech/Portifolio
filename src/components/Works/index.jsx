import React from 'react';
import Experencies from '../Experiences';

export default function Works() {
    return (
        <>
            <div className="w-full flex p-6 md:p-20 mt-12 md:mt-[5rem]">
                <div className="w-full md:w-[80rem] p-3">
                    <div className="flex justify-center items-center md:justify-start">
                        <span className="text-theme-blue text-base">
                            Minhas experiênciais
                        </span>
                    </div>

                    <h2 className="text-slate-600 text-center md:text-left text-4xl font-bold mt-3">
                        Lugares onde trabalhei
                    </h2>

                    <div className="w-full md:flex justify-center items-start mt-10 p-3 rounded-md shadow-md bg-white">
                        <Experencies textButton="Asisto tecnologia">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptate, illum saepe? Natus soluta a,
                            repellendus asperiores eveniet, iste, culpa quae
                            reiciendis laborum distinctio explicabo dolore sed
                            quam magnam facilis iusto?
                        </Experencies>
                        <Experencies textButton="Drean tecnology">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptate, illum saepe? Natus soluta a,
                            repellendus asperiores eveniet, iste, culpa quae
                            reiciendis laborum distinctio explicabo dolore sed
                            quam magnam facilis iusto?
                        </Experencies>
                    </div>
                </div>
            </div>
        </>
    );
}

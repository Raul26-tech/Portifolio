import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <>
            <div className="w-full flex p-3 md:p-20 mt-12 md:mt-[5rem]">
                <div className="w-full p-3">
                    <div className="flex justify-center items-center md:justify-start">
                        <span className="text-theme-blue text-base">
                            Meus projetos
                        </span>
                    </div>
                    <h2 className="text-slate-600 text-4xl font-bold mt-3 mb-4 text-center md:text-left">
                        Principais projetos
                    </h2>
                    <div className="w-full flex flex-col justify-center items-center md:flex-row md:items-center md:space-x-8 md:space-y-2 mt-10 p-6 rounded-md shadow-xl bg-white">
                        <div className="w-[15rem] md:w-[20rem] bg-slate-white rounded-md shadow-xl p-6 hover:-translate-y-2 hover:duration-300 cursor-pointer">
                            <div className="w-full h-20 flex justify-center items-center text-theme-blue text-base">
                                <h2 className="text-2xl font-bold">As-money</h2>
                            </div>
                            <div className="w-full flex flex-col p-3 border-[1px] border-l-theme-blue rounded-md">
                                <p className="text-slate-600 text-base overflow-y-auto">
                                    O As-money é um projeto que faz uma pequena
                                    gerencia de finanças, onde nós podemos
                                    realizar um CRUD de transações.
                                    <br />
                                    Foi um projeto que eu desenvolvi para
                                    solucionar um problema de gestão de um
                                    amigo, pois ele realizava gestão de maneira
                                    manual
                                </p>
                                <div className="mt-2 flex flex-col">
                                    <span className="text-theme-blue text-base">
                                        Tecnologias utilizadas
                                    </span>
                                    <span className="text-slate-600 text-base">
                                        React, React-router-dom, react-icons,
                                        react-hook-form, Typescript, Axios, Live
                                        Server
                                    </span>
                                    {/* <span className="text-theme-blue text-base mt-2">
                                        Url:{' '}
                                      
                                    </span> */}
                                </div>
                            </div>
                        </div>
                        <div className="w-[15rem] md:w-[20rem] bg-slate-white rounded-md shadow-xl p-6 hover:-translate-y-2 hover:duration-300 cursor-pointer">
                            <div className="w-full h-20 flex justify-center items-center text-theme-blue text-base">
                                <h2 className="text-2xl font-bold">
                                    Nome proj
                                </h2>
                            </div>
                            <div className="w-full flex flex-col p-3 border-[1px] border-l-theme-blue rounded-md">
                                <p className="text-slate-600 text-base overflow-y-auto">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Atque sed, dolorum dolore
                                    incidunt nam est quia adipisci facere quasi
                                    qui optio commodi expedita tempora vitae
                                    reiciendis explicabo reprehenderit alias
                                    sunt!
                                </p>
                                <span className="text-slate-600 text-base">
                                    Tecnologias
                                </span>
                            </div>
                        </div>
                        <div className="w-[15rem] md:w-[20rem] bg-slate-white rounded-md shadow-xl p-6 hover:-translate-y-2 hover:duration-300 cursor-pointer">
                            <div className="w-full h-20 flex justify-center items-center text-theme-blue text-base">
                                <h2 className="text-2xl font-bold">
                                    Nome proj
                                </h2>
                            </div>
                            <div className="w-full flex flex-col p-3 border-[1px] border-l-theme-blue rounded-md">
                                <p className="text-slate-600 text-base overflow-y-auto">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Atque sed, dolorum dolore
                                    incidunt nam est quia adipisci facere quasi
                                    qui optio commodi expedita tempora vitae
                                    reiciendis explicabo reprehenderit alias
                                    sunt!
                                </p>
                                <span className="text-slate-600 text-base">
                                    Tecnologias
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

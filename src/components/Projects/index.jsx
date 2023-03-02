import React from 'react';

export default function Projects() {
    return (
        <>
            <div className="w-full flex p-6 md:p-20 mt-12 md:mt-[5rem]">
                <div className="w-full p-3">
                    <div className="flex justify-center items-center md:justify-start">
                        <span className="text-theme-blue text-base">
                            Meus projetos
                        </span>
                    </div>
                    <h2 className="text-slate-600 text-4xl font-bold mt-3 mb-4 text-center md:text-left">
                        Projetos
                    </h2>
                    <div className="w-full flex flex-col justify-center items-center md:flex-row md:items-center md:space-x-8 md:space-y-2 mt-10 p-6 rounded-md shadow-xl bg-white">
                        <div className="w-[15rem] md:w-[20rem] md:h-[20rem] bg-slate-white rounded-md shadow-xl p-3 hover:-translate-y-2 hover:duration-300 cursor-pointer">
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
                        <div className="w-[15rem] md:w-[20rem] md:h-[20rem] bg-slate-white rounded-md shadow-xl p-3 hover:-translate-y-2 hover:duration-300 cursor-pointer">
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
                        <div className="w-[15rem] md:w-[20rem] md:h-[20rem] bg-slate-white rounded-md shadow-xl p-3 hover:-translate-y-2 hover:duration-300 cursor-pointer">
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

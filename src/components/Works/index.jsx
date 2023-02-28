import React, { useState } from 'react';

export default function Works() {
    const [jobs, setJobs] = useState(false);
    const [secondJob, setSecondJob] = useState(false);

    return (
        <>
            <div className="w-full flex p-6 md:p-20 mt-12 md:mt-[5rem]">
                <div className="w-full  md:w-[80rem] p-3">
                    <span className="text-theme-blue text-base">
                        Minhas experiênciais
                    </span>
                    <h2 className="text-slate-600 text-4xl font-bold mt-3">
                        Lugares onde trabalhei
                    </h2>
                    <div className="w-full md:flex justify-center items-start mt-10 p-3 rounded-md shadow-md bg-white">
                        <div className="w-full flex flex-col p-3 h-auto">
                            <button
                                className="w-full h-[3rem] justify-center items-center p-3 text-theme-blue border-l-[#2596FF] hover:bg-theme-blue hover:text-white hover:border-l-theme-blue-dark-50 transition duration-150 border-2"
                                onClick={() => {
                                    setJobs((prevState) => !prevState);
                                }}
                            >
                                Asisto Tecnologia
                            </button>
                            {jobs && (
                                <div className="w-full flex justify-center">
                                    <div className="m-6 p-3 text-slate-600 font-normal">
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                            Aperiam minima eos eum error saepe
                                            est pariatur at et incidunt deserunt
                                            dolorum, iusto magnam. In numquam
                                            porro veritatis. Ad, accusamus
                                            voluptatem.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="w-full flex flex-col p-3 h-auto">
                            <button
                                className="w-full h-[3rem] justify-center items-center p-3 text-theme-blue border-l-[#2596FF] hover:bg-theme-blue hover:text-white hover:border-l-theme-blue-dark-50 transition duration-150 border-2"
                                onClick={() => {
                                    setSecondJob((prevState) => !prevState);
                                }}
                            >
                                Drean Tecnology
                            </button>
                            {secondJob && (
                                <div className="w-full flex justify-center">
                                    <div className="m-6 p-3 text-slate-600 font-normal">
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                            Aperiam minima eos eum error saepe
                                            est pariatur at et incidunt deserunt
                                            dolorum, iusto magnam. In numquam
                                            porro veritatis. Ad, accusamus
                                            voluptatem.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

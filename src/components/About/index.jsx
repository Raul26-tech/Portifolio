import React from 'react';

export default function About() {
    return (
        <section className="w-full flex justify-center p-6 md:p-20">
            <div className="w-[30rem] p-3 hidden md:block">
                <img
                    src="../src/assets/animation.png"
                    alt="Animação da sessão"
                />
            </div>
            <div className="w-full  md:w-[30rem] p-8">
                <span className="text-theme-blue text-base">
                    Um pouco sobre mim
                </span>
                <h2 className="text-slate-600 text-4xl font-bold">Sobre</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum soluta cum fugit modi animi quasi ducimus consectetur
                    officiis quam officia, corporis laboriosam eius magni autem
                    corrupti blanditiis reiciendis voluptatem tempore.
                </p>
            </div>
        </section>
    );
}

import React from 'react';
import TypeIt from 'typeit-react';

const User = ({ children }) => {
    return (
        <strong style={{ color: '#f5f5f5', fontSize: '40px' }}>
            {children}
        </strong>
    );
};

export default function Animation() {
    return (
        <div className="w-full h-[25rem] flex items-center justify-center md:justify-around p-12 ">
            <div className="w-[35rem] flex justify-center">
                <TypeIt
                    options={{
                        loop: true,
                        loopDelay: 200,
                        nextStringDelay: 200,
                    }}
                >
                    <span className="text-theme-blue">
                        Olá, seja bem-vindo(a) ao meu perfil, eu sou
                    </span>
                    <br />
                    <User>Raul Santos</User>
                    <br />
                    <User>Desenvolvedor </User>
                    <span className="text-theme-blue font-bold text-[2.5rem]">
                        Front end.
                    </span>
                    <br />
                </TypeIt>
            </div>
            <div className="w-[15rem] h-[15rem] hidden md:block">
                <img
                    className="rounded-full opacity-[0.9]"
                    src="../src/assets/user.jpeg"
                    alt="Usuário"
                />
            </div>
        </div>
    );
}

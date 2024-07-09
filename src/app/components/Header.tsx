'use client'
import { useState } from 'react';
import Image from "next/image";
import logo from '@/app/Assets/logo-type (4).png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative">
            <div className="w-full z-20 py-4 bg-white flex justify-center items-center">
                <div className="w-screen flex md:px-0 px-10 max-w-5xl justify-between items-center">
                    <Image
                        width={90}
                        height={150}
                        src={logo}
                        alt="logo Boa Rifa"
                    />
                    <div className="hidden md:flex z-20 gap-4 items-center justify-center">
                        <a className="hover:underline" href="#oque-e">Solução</a>
                        <a className="hover:underline" href="#como-funciona">Simples</a>
                        <a className="hover:underline" href="#pagamento-bloqueado">Sem Block</a>
                        <a className="hover:underline" href="#recompensa">Recompensa</a>
                        <a className="hover:underline" href="#faq">FAQ</a>
                    </div>
                    <div className="hidden md:flex z-20 gap-4 items-center justify-center">
                        <a href='https://develop.app.boarifa.com/login' className="bg-green-500 px-2 py-1 text-white rounded-lg hover:scale-110 hover:shadow-lg transition-all">
                            Criar Conta
                        </a>
                        <a href='https://develop.app.boarifa.com/login' className="bg-green-900 px-2 py-1 text-white rounded-lg hover:scale-110 hover:shadow-lg transition-all">
                            Entrar Agora
                        </a>
                    </div>
                    <button
                        className="md:hidden z-20 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full z-20 bg-white shadow-lg">
                    <div className="flex flex-col items-center p-4">
                        <a className="hover:underline" href="#oque-e">Solução</a>
                        <a className="hover:underline" href="#como-funciona">Simples</a>
                        <a className="hover:underline" href="#pagamento-bloqueado">Sem Block</a>
                        <a className="hover:underline" href="#recompensa">Recompensa</a>
                        <a className="hover:underline" href="#faq">FAQ</a>
                        <button className="bg-green-500 px-4 py-2 text-white rounded-lg my-2 w-full hover:scale-105 transition-all">Criar Conta</button>
                        <button className="bg-green-900 px-4 py-2 text-white rounded-lg my-2 w-full hover:scale-105 transition-all">Entrar Agora</button>
                    </div>
                </div>
            )}
        </div>
    )
}

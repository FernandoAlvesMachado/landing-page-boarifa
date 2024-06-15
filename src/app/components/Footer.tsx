'use client'
import { useState } from 'react';
import Image from "next/image";
import LogoFooter from '@/app/Assets/White-Logo.png';
import WhatsAppIcon from '@/app/Assets/WhatsApp.png';
import FacebookIcon from '@/app/Assets/facebook.png';
import InstagramIcon from '@/app/Assets/Instagram.png';

export default function Footer() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative">
            <div className="w-full py-4 bg-green-500 h-96 flex justify-center items-center">
                <div className="w-screen flex flex-col max-w-5xl justify-between items-center border-b-white border-b-[0.5px] pb-5">
                    <div className="flex justify-between w-full items-center">
                        <Image
                            width={100}
                            alt="imagem footer"
                            src={LogoFooter}
                        />
                        <div className="hidden md:flex flex-col">
                            <h1 className="font-bold text-white">Links</h1>
                            <a className="font-thin text-white" href="">Sobre</a>
                            <a className="font-thin text-white" href="">Suporte</a>
                        </div>
                        <div className="hidden md:flex flex-col">
                            <h1 className="font-bold text-white">Contato</h1>
                            <a className="font-thin text-white" href="">Instagram</a>
                            <a className="font-thin text-white" href="">Facebook</a>
                        </div>
                        <button 
                            className="md:hidden z-20 focus:outline-none" 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg 
                                className="w-6 h-6 text-white" 
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
                        <div className="flex flex-col z-20 gap-4 items-center justify-center">
                            <button className="bg-green-200 px-2 py-1 text-green-700 rounded-lg hover:scale-110 hover:shadow-lg transition-all">Criar Conta</button>
                            <button className="bg-green-900 px-2 py-1 text-white rounded-lg hover:scale-110 hover:shadow-lg transition-all">Entrar Agora</button>
                        </div>
                    </div>
                    
                    {isMenuOpen && (
                        <div className="md:hidden flex flex-col items-center p-4 w-full bg-green-500">
                            <div className="flex flex-col">
                                <h1 className="font-bold text-white">Links</h1>
                                <a className="font-thin text-white" href="">Sobre</a>
                                <a className="font-thin text-white" href="">Suporte</a>
                            </div>
                            <div className="flex flex-col mt-4">
                                <h1 className="font-bold text-white">Contato</h1>
                                <a className="font-thin text-white" href="">Instagram</a>
                                <a className="font-thin text-white" href="">Facebook</a>
                            </div>
                        </div>
                    )}

                    <div className="w-full mt-5 flex justify-between items-center">
                        <div className="flex gap-3">
                            <Image
                                width={35}
                                quality={100}
                                src={WhatsAppIcon}
                                alt="WhatsAppIcon"
                            />
                            <Image
                                width={35}
                                quality={100}
                                src={FacebookIcon}
                                alt="Facebook Icon"
                            />
                            <Image
                                width={35}
                                quality={100}
                                src={InstagramIcon}
                                alt="InstagramIcon"
                            />
                        </div>
                        <div>
                            <h1 className="text-white">© 2024 Boa Rifa. Todos direitos reservados</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

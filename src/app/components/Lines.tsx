'use client';

import React, { useEffect, useState } from 'react';

export default function Lines() {
    const text = "CRIE SUA RIFA ONLINE";

    const [count, setCount] = useState(0);

    useEffect(() => {
        const pWidth = 200; // Largura estimada de cada <p>
        const screenWidth = window.innerWidth;
        setCount(Math.ceil(screenWidth / pWidth) * 2); // Ajustar para garantir que sempre haja textos adicionais
    }, []);

    const generateParagraphs = (extra = 0) => {
        return [...Array(count + extra)].map((_, index) => (
            <p key={index} className="text-sm font-light text-white whitespace-nowrap">
                {text}
            </p>
        ));
    };

    return (
        <div className='relative overflow-hidden h-44 items-center justify-center flex w-screen'>
            <div className="absolute rotate-3 overflow-hidden w-full h-7 flex items-center justify-center bg-green-600">
                <div className="flex absolute w-full animate-scroll-left gap-5">
                    {generateParagraphs()}
                </div>
            </div>
            <div className="absolute -z-10 blur-sm -rotate-3 w-full h-7 flex items-center justify-center bg-green-600">
                <div className="flex absolute w-full animate-scroll-right gap-5">
                    {generateParagraphs(1)} {/* Gera um parágrafo extra para continuidade */}
                </div>
            </div>
        </div>
    );
}

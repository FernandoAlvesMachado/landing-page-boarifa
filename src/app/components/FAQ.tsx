'use client'
import { useState } from 'react';



interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQ() {
    const faqs: FAQItem[] = [
        {
            question: 'Como funciona a Boa Rifa?',
            answer: 'Na Boa Rifa, você pode criar e gerenciar suas rifas online de forma simples e segura. Basta se cadastrar, criar sua campanha, definir os detalhes da rifa e compartilhar com seu público.',
        },
        {
            question: 'Quais são as taxas envolvidas?',
            answer: 'Cobramos uma taxa fixa de 2% sobre o valor arrecadado em suas rifas. Além disso, não há taxas adicionais de transação ou bloqueios de pagamento.',
        },
        {
            question: 'Posso personalizar minhas rifas?',
            answer: 'Sim, você pode personalizar suas rifas de acordo com suas preferências. Desde a quantidade de números disponíveis até a descrição e imagens utilizadas na divulgação.',
        },
        {
            question: 'Como recebo os pagamentos das rifas vendidas?',
            answer: 'Os pagamentos das rifas vendidas são processados de forma rápida e segura através do Pix. O valor arrecadado é depositado diretamente na sua conta bancária cadastrada.',
        },
        {
            question: 'Existe um limite para o número de rifas que posso criar?',
            answer: 'Não há limite para a quantidade de rifas que você pode criar na Boa Rifa. Você pode lançar quantas campanhas desejar e gerenciá-las facilmente através do seu painel de controle.',
        },
        {
            question: 'Quais são os benefícios de alcançar 100 mil em vendas?',
            answer: 'Ao atingir 100 mil em vendas, você recebe uma placa exclusiva da Boa Rifa como reconhecimento pelo seu sucesso e dedicação.',
        },
        {
            question: 'Como posso entrar em contato em caso de dúvidas ou problemas?',
            answer: 'Estamos aqui para ajudar! Você pode entrar em contato conosco através do nosso formulário de contato disponível na plataforma ou enviando um e-mail para suporte@boarifa.com. Nossa equipe estará pronta para atendê-lo e resolver quaisquer questões que surgirem.',
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className='font-bold text-green-500 text-center py-7 text-4xl'>Perguntas Frequentes</h1>
            {faqs.map((faq, index: number) => (
                <div key={index} className="mb-4">
                    <button
                        className="w-full text-left bg-gray-200 p-4 rounded-md hover:bg-green-300"
                        onClick={() => toggleFAQ(index)}
                    >
                        {faq.question}
                    </button>
                    <div
                        className={`overflow-auto transition-height duration-300 ${
                            openIndex === index ? 'h-auto' : 'h-0'
                        }`}
                    >
                        <div className="p-4 bg-gray-100 rounded-md">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

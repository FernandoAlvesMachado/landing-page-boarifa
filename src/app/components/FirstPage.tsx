import Image from "next/image"
import ImagemPrimeiraDobra from '@/app/Assets/Group 2.png'

export default function FirstPage() {

    return (
        <div>
            <div className="w-full py-4 bg-white p-10 md:p-0 flex justify-center items-center">
                <div className="w-screen md:flex max-w-5xl justify-between">
                    {/* PRIMEIRO LADO */}
                    <div className="z-10 flex flex-col h-[350px] md:h-[600px] w-full max-w-xl gap-4 items-center justify-center">
                        <h1 className="text-4xl font-bold text-center md:text-start">Crie sua <span className="text-green-600"> campanha online</span> em <span className="text-green-600"> menos</span> de 1 minuto</h1>
                        <p className="font-extralight text-center md:text-start">Agora você pode ter tudo na palma da mão, controle com velocidade, agilidade e com a melhor taxa do mercado, sem bloqueio de pagamento!</p>
                        <div className="flex justify-between w-full md:flex-row flex-col gap-3">
                            <button className="bg-green-500 px-2 py-1 text-white rounded-lg hover:scale-110 hover:shadow-lg transition-all">Criar conta agora mesmo!</button>
                            <button className="bg-white px-2 py-1 text-green-900 border border-green-900 rounded-lg hover:scale-110 hover:shadow-lg transition-all">Mais informações</button>
                        </div>
                    </div>

                    {/* SEGUNDO LADO */}
                    <div className="flex md:-m-28 w-full gap-4 items-center justify-center ">
                        <Image
                            src={ImagemPrimeiraDobra}
                            alt="Mockup Celular"
                            priority
                            width={1200}
                            height={700}
                        />

                    </div>

                </div>
            </div>
        </div>
    )

}
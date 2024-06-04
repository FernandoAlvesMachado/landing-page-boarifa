import Image from "next/image"
import PlacaGanhador from '@/app/Assets/Placaconquista.png'

export default function PlateSecction() {

    return (
        <div>
            <div className="w-full py-4 bg-white flex justify-center items-center">
                <div className="w-screen flex max-w-5xl justify-between">
                    {/* PRIMEIRO LADO */}
                    <div className="z-10 flex flex-col h-[600px] w-full max-w-xl gap-4 items-center justify-center">
                        <h1 className="text-4xl font-bold text-green-500">Celebre suas Conquistas com Nossa Placa Exclusiva</h1>
                        <p className="font-extralight">Na Boa Rifa, reconhecemos o seu sucesso. Ao atingir a marca de 100 mil em vendas, você não apenas alcança um marco incrível, mas também recebe uma placa exclusiva como prova de sua dedicação e excelência.</p>
                        
                    </div>

                    {/* SEGUNDO LADO */}
                    <div className="flex w-full gap-4 items-center justify-center ">
                        <Image
                            src={PlacaGanhador}
                            alt="Mockup Placa ganhadores"
                            priority
                            width={400}
                        />

                    </div>

                </div>
            </div>
        </div>
    )

}
import Image from "next/image"
import DashBoardImage from '@/app/Assets/Studio Display Mockup.png'

export default function Dashboard() {

    return (
        <div className="w-full border-b-2 border-green-500">
            <div className="w-full mt-20 md:mt-0 md:h-[400px] bg-white flex justify-center items-end">
                <div className="md:flex w-full gap-12 flex-col-reverse flex md:flex-row md:max-w-5xl justify-between">
                    {/* PRIMEIRO LADO */}
                    <div className="flex  w-full gap-4 items-center justify-center ">
                        <Image
                            src={DashBoardImage}
                            alt="Mockup Dashboard"
                            priority
                            width={1200}
                            height={700}
                        />

                    </div>

                    {/* SEGUNDO LADO */}
                    <div className="z-10 px-6 md:px-0 text-center md:text-start  flex flex-col w-full max-w-xl gap-4 items-center justify-center">
                        <h1 className="text-4xl font-bold text-green-500">Controle Total em um Cenário Unificado</h1>
                        <p className="font-extralight">Otimize sua gestão de campanhas com o Dashboard intuitivo da Boa Rifa, onde você tem tudo o que precisa em um só lugar.</p>
                        
                    </div>

                </div>
            </div>
        </div>
    )

}
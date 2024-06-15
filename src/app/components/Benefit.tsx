import Image from "next/image"
import seguranca from '@/app/Assets/seguranca.png'
import grafico from '@/app/Assets/grafico.png'
import performance from '@/app/Assets/performance.png'
import preview from '@/app/Assets/preview.png'
import criacao from '@/app/Assets/criacao.png'

export default function Benefit() {

    return (
        <div>
            <div className="w-full py-4 bg-white flex justify-center  md:h-[400px] items-center">
                <div className="w-screen flex max-w-5xl justify-between">
                    {/* PRIMEIRO LADO */}
                    <div className="z-10 flex flex-col mt-5 w-full gap-10 items-center justify-center">
                        <h1 className="text-3xl font-bold text-green-600">O que oferecemos?</h1>
                        <div className="w-full text-xl flex flex-col gap-7">

                            <div className="flex md:flex-row flex-col gap-5 justify-between w-full items-center">
                                <div className="flex items-center justify-center gap-2">
                                    <Image
                                        src={seguranca}
                                        width={50}
                                        quality={100}
                                        alt="icon-segurança"
                                    />
                                    <h2 className="w-60">Taxa de 2.5% no pix</h2>
                                </div>
                                <div className="flex  items-center justify-center gap-2">
                                    <Image
                                        src={grafico}
                                        width={50}
                                        quality={100}
                                        alt="icon-segurança"
                                    />
                                    <h2>Gráficos personalizados</h2>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Image
                                        src={performance}
                                        width={50}
                                        quality={100}
                                        alt="icon-segurança"
                                    />
                                    <h2 className="max-w-64 items-center justify-center flex">páginas de vendas de altíssima performance  </h2>
                                </div>
                            </div>
                            <div className="flex md:flex-row flex-col gap-5 items-center justify-evenly w-full">
                                <div className="flex items-center justify-center gap-2">
                                    <Image
                                        src={preview}
                                        width={50}
                                        quality={100}
                                        alt="icon-segurança"
                                    />
                                    <h2 className="flex max-w-64">Visualize o preview da sua rifa antes de publicar</h2>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Image
                                        src={criacao}
                                        width={50}
                                        quality={100}
                                        alt="icon-segurança"
                                    />
                                    <h2 className="flex max-w-64">Criação de rifa com até 50 mil numeros</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
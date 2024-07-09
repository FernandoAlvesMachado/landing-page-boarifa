import Image from "next/image"
import edit from '@/app/Assets/edit.png'
import preview from '@/app/Assets/preview02.png'
import share from '@/app/Assets/share.png'

export default function Simple() {

    return (
        <div>
            <div id="como-funciona" className="w-full py-4 bg-white flex justify-center md:h-[500px] items-center">
                <div className="w-screen flex max-w-5xl justify-between">
                    {/* PRIMEIRO LADO */}
                    <div className="z-10 flex flex-col mt-5 w-full gap-4 items-center justify-center">
                        <h1 className="text-3xl font-bold text-green-600 px-6 md:px-0">Veja como é Simples</h1>
                        <div className="w-full font-extralight text-center text-lg max-w-[750px] flex flex-col gap-7 px-6 md:px-0">
                            <p>Na Boa Rifa, simplificamos o processo para que sua campanha seja publicada em menos de um minuto, com opções de personalização de até 50 mil números.</p>
                        </div>
                        <div className="flex md:flex-row flex-col gap-20  mt-10 relative items-center justify-center">
                            {/* Bloco 01 */}
                            <div className="text-sm gap-3 text-center max-w-96 font-thin flex items-center justify-center flex-col">
                                <Image
                                    src={edit}
                                    width={110}
                                    quality={100}
                                    alt="primeiro-icon-edit"
                                />
                                <h1 className="text-green-600 font-normal text-base">Criação da campanha</h1>
                                <p className="text-center">Basta criar uma conta no Boa Rifa, em passos simples e pronto sua primeira campanha está criada!</p>
                            </div>
                            {/* Bloco 02 */}
                            <div className="text-sm gap-3 text-center max-w-96 font-thin flex items-center justify-center flex-col">
                                <Image
                                    src={preview}
                                    width={110}
                                    quality={100}
                                    alt="primeiro-icon-edit"
                                />

                                <h1 className="text-green-600 font-normal text-base">Criação da campanha</h1>
                                <p className="text-center">Basta criar uma conta no Boa Rifa, em passos simples e pronto sua primeira campanha está criada!</p>
                            </div>
                            {/* Bloco 03 */}
                            <div className="text-sm text-center max-w-96 gap-3 font-thin flex items-center justify-center flex-col">
                                <Image
                                    src={share}
                                    width={110}
                                    quality={100}
                                    alt="primeiro-icon-edit"
                                />
                                <h1 className="text-green-600 font-normal text-base">Criação da campanha</h1>
                                <p className="text-center">Basta criar uma conta no Boa Rifa, em passos simples e pronto sua primeira campanha está criada!</p>
                            </div>
                            <span className="md:flex hidden absolute border-dashed border-black max-w-[550px] w-full h-0.5 border-t-2 mb-24 -z-10"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
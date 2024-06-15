import Image from "next/image"
import ImagemBlock from '@/app/Assets/payment-block.png'

export default function PaymentBlock() {

    return (
        <div>
            <div className="w-full py-4 flex justify-center items-center">
                <div className="w-screen md:flex px-6 md:px-0 max-w-5xl justify-between h-[600px]">
                    {/* PRIMEIRO LADO */}
                    <div className="z-10 flex text-center md:text-start flex-col w-full max-w-xl gap-4 items-center justify-center">
                        <h1 className="text-4xl font-bold text-green-600">Diga adeus aos bloqueios de
                            pagamento e alavanque
                            suas rifas!</h1>
                        <p className="font-extralight">Não deixe que bloqueios frustrantes atrapalhem o sucesso das suas rifas. <span className="font-bold"> Com a Boa Rifa, liberdade e segurança são garantidas em cada transação.</span></p>

                    </div>

                    {/* SEGUNDO LADO */}
                    <div className="flex md:mt-28 w-full gap-4 items-center justify-center h-full">
                        <div className="md:flex hidden">
                        <Image
                            src={ImagemBlock}
                            alt="Mockup Celular"
                            priority
                            width={750}
                            quality={100}
                        />

                        </div>
                        <div className="md:hidden">
                        <Image
                            src={ImagemBlock}
                            alt="Mockup Celular"
                            priority
                            width={450}
                            quality={100}
                        />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
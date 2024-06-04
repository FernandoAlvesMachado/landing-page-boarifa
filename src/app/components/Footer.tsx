import Image from "next/image"
import LogoFooter from '@/app/Assets/White-Logo.png'
import WhatsAppIcon from '@/app/Assets/WhatsApp.png'
import FacebookIcon from '@/app/Assets/facebook.png'
import InstagramIcon from '@/app/Assets/Instagram.png'

export default function Footer() {

    return (
        <div>
            <div className="w-full py-4 bg-green-500 h-96 flex justify-center items-center">
                <div>
                    <div className="w-screen flex max-w-5xl justify-between border-b-white border-b-[0.5px] pb-5">
                        <Image
                            width={100}
                            alt="imagem footer"
                            src={LogoFooter}
                        />
                        <div className="flex flex-col">
                            <h1 className="font-bold text-white">Links</h1>
                            <a className="font-thin text-white" href="">Sobre</a>
                            <a className="font-thin text-white" href="">Suporte</a>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-white">Contato</h1>
                            <a className="font-thin text-white" href="">Instagram</a>
                            <a className="font-thin text-white" href="">Facebook</a>
                        </div>
                        <div className="flex flex-col z-20 gap-4 items-center justify-center">
                            <button className="bg-green-200 px-2 py-1 text-green-700 rounded-lg hover:scale-110 hover:shadow-lg transition-all">Criar Conta</button>
                            <button className="bg-green-900 px-2 py-1 text-white rounded-lg hover:scale-110 hover:shadow-lg transition-all">Entrar Agora</button>
                        </div>


                    </div>

                    <div className="w-full mt-5 justify-between items-center flex">
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
    )

}
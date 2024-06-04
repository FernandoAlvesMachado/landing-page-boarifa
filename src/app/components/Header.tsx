import Image from "next/image";
import logo from '@/app/Assets/logo-type (4).png'

export default function Header() {
    return (
        <div>
            <div className="w-full z-20 py-4 bg-white flex justify-center items-center">
                <div className="w-screen flex max-w-5xl justify-between">
                    <Image
                        width={90}
                        height={150}
                        src={logo}
                        alt="logo Boa Rifa"
                    />
                    <div className="flex z-20 gap-4 items-center justify-center">
                        <a className="hover:underline" href="#comofunciona">Como Funciona</a>
                        <a className="hover:underline"  href="#recompensas">Recompensas</a>
                        <a className="hover:underline"  href="#precos">Preços</a>
                        <a className="hover:underline"  href="#faq">FAQ</a>
                    </div>
                    <div className="flex z-20 gap-4 items-center justify-center">
                        <button className="bg-green-500 px-2 py-1 text-white rounded-lg hover:scale-110 hover:shadow-lg transition-all">Criar Conta</button>
                        <button className="bg-green-900 px-2 py-1 text-white rounded-lg hover:scale-110 hover:shadow-lg transition-all">Entrar Agora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
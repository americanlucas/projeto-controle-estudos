import Header from "@/components/header/header";
import Menu from "@/components/main/menu/menu";
import { Contexto } from "@/context/Tema";
import { useContext } from "react";

export default function Home () {
    const {corFundo, setCorFundo} = useContext(Contexto)

    return (
        <main className={corFundo ? "bg-black text-white grid grid-cols-6 grid-rows-6 duration-200 ease-in" : "bg-white text-black grid grid-cols-6 grid-rows-6 duration-200 ease-in"}>
            <div className="col-span-1 row-span-6">
                <Menu/>
            </div>
            <div className="col-span-5 row-span-1">              
                    <Header titulo='Controle de Estudos'/>
            </div>
        </main>
    )
}
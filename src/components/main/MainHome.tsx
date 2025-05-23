import Tema from "@/context/Tema";
import Link from "next/link";
import { useContext } from "react";


export default function MainHome () {

    const {corFundo} = useContext(Tema)
    return(
        <div className="flex flex-col text-center flex-wrap items-center w-full h-full py-30 px-16 gap-10 ">
            <h1 className="text-6xl font-bold">Seja bem vindo ao <Link className={`${corFundo ? "hover:text-sky-300/85" : "hover:text-sky-700/85"} hover:duration-300 transition-all ease-in`}href={'/'}>Controle de Estudos</Link></h1>
            <h1 className="flex text-4xl items-center">Aqui você marcará suas horas estudadas e poderá ver o ranking para competir com outros estudantes</h1>
        </div>

    )
}
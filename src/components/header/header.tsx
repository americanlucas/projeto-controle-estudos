import { Contexto } from "@/context/Tema";
import { Moon } from "lucide-react"
import { useContext, useState } from "react"

export default function Header (props: any) {
    const {corFundo, setCorFundo} = useContext(Contexto);
    
    return (
        <>
            <div className="flex justify-between m-4 hover:cursor-pointer p-4">
                <a href="#" className="text-2xl font-bold hover:text-zinc-500 duration-200 ease-in">{props.titulo}</a>
                <div className="flex gap-8 text-2xl ">
                    <a href="#" className={corFundo ? "hover:text-zinc-500 duration-300 ease-in": ''}>Sobre</a>
                    <a href="#" className={corFundo ? "hover:text-zinc-500 duration-300 ease-in": ''}>Contato</a>
                    <button className={corFundo ? "hover:text-zinc-500 duration-300 ease-in cursor-pointer": 'cursor-pointer'} onClick={() => setCorFundo(!corFundo)}><Moon size={30}/></button>
                </div>
            </div>
                
        </>
    )
}
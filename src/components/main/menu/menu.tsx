import { useContext, useEffect, useState } from "react";
import MenuItem from "./menu_item";
import { Contexto } from "@/context/Tema";
import { BookCopy, ChartNoAxesCombined, ChevronsUpDown, MenuIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { Perfil } from "@/context/PerfilDoUsuario";

export default function Menu() {
    const {corFundo, setCorFundo} = useContext(Contexto)
    let {LinkImagem, NomeUsuario} = useContext(Perfil)
    const [colapsaItem, setColapsaItem] = useState(true)
    const [colapsaMenu, setColapsaMenu] = useState(true)

    useEffect (()=>{
        if (colapsaMenu === false && colapsaItem === false) {
            setColapsaItem(true)
        }
    }, [colapsaMenu, colapsaItem])

    return (
        <>
        <section className="duration-400 ease-in-out"> 
            <main className={`${corFundo ? "menu":"menu"} ${colapsaMenu? "w-70": "w-30"}`} >
                <div className={`flex flex-row px-4 ${colapsaMenu ? "border-b-2 border-zinc-500 justify-between": "justify-center "}`}>
                    {colapsaMenu && <h1 className="pb-5 text-2xl font-bold">Menu</h1>}
                    <button onClick={()=>setColapsaMenu(!colapsaMenu)} className="botao"><MenuIcon size={30}/></button>
                </div>
                <div className="flex flex-col flex-1 mb-4">
                    <div onClick={()=>setColapsaItem(!colapsaItem)} >
                        {colapsaMenu && (
                            <div className="flex items-baseline justify-between p-2 cursor-pointer hover:text-zinc-300 duration-200">
                                <h1 className="pt-3 text-lg font-medium">Funcionalidades</h1>
                                <button className="cursor-pointer"><PlusIcon size={16}/></button>
                            </div>
                        )}
                    </div>
                    
                    {colapsaMenu ? (
                        <div className="duration-200 ease-in">
                            <div className="flex py-2 px-3 flex-col gap-3">
                                <div className="flex hover:bg-zinc-500 py-1 px-2 rounded-md text-lg items-center">
                                    <BookCopy size={20}/>
                                    <MenuItem nomeLink='Contador' url="/contador"/>
                                </div>
                                <div className="flex hover:bg-zinc-500 py-1 px-2 rounded-md text-lg items-center">
                                    <ChartNoAxesCombined size={20}/>
                                    <MenuItem nomeLink='Ranking' url="/ranking"/>
                                </div>
                            </div>
                        </div>
                    ): (
                            <div className="pt-6 gap-3">
                                <div className="flex justify-center">
                                    <BookCopy size={30}/>
                                </div>
                                <div className="flex justify-center">
                                    <ChartNoAxesCombined size={30}/>
                                </div>
                            </div>
                    )}
                </div>
                <Link href={`/perfil`} className="flex justify-around items-center text-center border-t-3 border-zinc-500 pt-3 cursor-pointer ">
                    <img 
                        className="rounded-full" 
                        src={LinkImagem = "https://i.pinimg.com/736x/5c/9d/2a/5c9d2a13557b7330b3e91cf9a7670d1a.jpg"} 
                        alt="Foto de perfil lucas" 
                        width={50} 
                        height={20}
                    />
                    {colapsaMenu && (
                        <div className="flex justify-between items-center">
                            <h1 className="text-lg hover:text-zinc-300 duration-150">{LinkImagem = "Lucas Americano"}</h1>
                            <ChevronsUpDown/>
                        </div>
                    )}
                </Link>
            </main>
        </section>
        </>
    )
}
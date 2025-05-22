import { useContext, useEffect } from "react";
import { Contexto } from "@/context/Tema";
import { MenuIcon } from "lucide-react";
import { Perfil } from "@/context/PerfilDoUsuario";
import { ColapsaMenu } from "@/context/ColapsaMenu";
import MenuUsuario from "./menu_usuario";
import { ColapsaItem } from "@/context/ColapsaItem";
import MenuPages from "./menu-page";

interface Menu {
    titulo: string
}

export default function Menu(props:Menu) {
    const {corFundo} = useContext(Contexto)
    const {colapsaItem, setColapsaItem} = useContext(ColapsaItem)
    const {colapsaMenu, setColapsaMenu} = useContext(ColapsaMenu)


    useEffect (()=>{
        if (colapsaMenu === false && colapsaItem === false) {
            setColapsaItem(true)
        }
    }, [colapsaMenu, colapsaItem])

    return (
        <>
        <section className="transition-all duration-400 ease-in-out select-none"> 
            <main className={`${corFundo ? "menu bg-slate-700/40":"menu bg-slate-800/65"} ${colapsaMenu? "w-70": "w-30"}`} >
                    <div className={`flex flex-row px-4 style ${colapsaMenu ? "border-b-[0.3px] border-zinc-500 justify-between": "justify-center "}`}>
                        {colapsaMenu && <h1 className="pb-5 text-2xl font-bold">{props.titulo}</h1>}
                        <button onClick={()=>setColapsaMenu(!colapsaMenu)} className="botao"><MenuIcon size={30}/></button>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <MenuPages titulo="Funcionalidades"/>
                        </div>
                        <div className={`absolute bottom-3 ${colapsaMenu ? "w-60": 'left-[32px]'} `}>
                            <MenuUsuario nomeUsuario="Lucas Americano" url="perfil"/>
                        </div>
                    </div>
            </main>
        </section>
        </>
    )
}
import { ColapsaMenu } from "@/context/ColapsaMenu"
import ContextoMenu from "@/context/ContextoMenu"
import { Perfil } from "@/context/PerfilDoUsuario"
import { ChevronsUpDown } from "lucide-react"
import Link from "next/link"
import { useContext } from "react"

interface MenuUsuario {
    url: string,
    nomeUsuario: string
}

export default function MenuUsuario (props: MenuUsuario) {
    let {LinkImagem, NomeUsuario} = useContext(ContextoMenu)
    const {colapsaMenu, setColapsaMenu} = useContext(ContextoMenu)

    return(
        <Link href={`/${props.url}`} className={`${colapsaMenu && "border-t-[0.3px] border-zinc-500"} flex justify-around items-center text-center pt-3 cursor-pointer`}>
            <img 
                className={`rounded-md`} 
                src={LinkImagem = "https://i.pinimg.com/736x/5c/9d/2a/5c9d2a13557b7330b3e91cf9a7670d1a.jpg"} 
                alt="Foto de perfil lucas" 
                width={50} 
                height={20}
            />
            {colapsaMenu && (
                <div className="flex justify-between items-center">
                    <h1 className="text-lg hover:text-zinc-300 duration-150">{NomeUsuario = `${props.nomeUsuario}`}</h1>
                    <ChevronsUpDown/>
                </div>
            )}
        </Link>
    )
}
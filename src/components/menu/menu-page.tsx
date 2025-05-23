import { ColapsaItem } from "@/context/ColapsaItem"
import { ColapsaMenu } from "@/context/ColapsaMenu"
import { BookCopy, ChartNoAxesCombined, PlusIcon } from "lucide-react"
import { useContext } from "react"
import MenuItem from "./menu_item"
import MenuTopico from "./menu_topico"
import ContextoMenu from "@/context/ContextoMenu"

interface MenuPage {
    titulo: string
}

export default function MenuPages(props: MenuPage) {
    const {colapsaMenu, setColapsaMenu} = useContext(ContextoMenu)
    const {colapsaItem, setColapsaItem} = useContext(ContextoMenu)

    return(
        <div className="flex flex-col mb-4">
            <div onClick={()=>setColapsaItem(!colapsaItem)}>
                {colapsaMenu && (
                    <div className="flex items-baseline justify-between p-2 cursor-pointer hover:text-zinc-300 duration-200">
                        <h1 className="pt-3 text-lg font-medium">{props.titulo}</h1>
                        <button className="cursor-pointer"><PlusIcon size={16}/></button>
                    </div>
                )}
            </div>
            {colapsaMenu ? (
                <div className={`transition-all duration-200 ease-in-out ${colapsaItem && 'hidden'}`}>
                    <div className="flex py-2 px-3 flex-col gap-3">
                        <MenuTopico topicoNome="Contador" url="contador">
                            <BookCopy/>
                        </MenuTopico>
                        <MenuTopico topicoNome="Ranking" url="ranking">
                            <ChartNoAxesCombined/>
                        </MenuTopico>
                    </div>
                </div>
            ): (
                    <div className="pt-10 gap-3 flex flex-col items-center">
                        <a href="/contador" className="flex justify-center rounded-md p-3 w-fit hover:bg-zinc-500">
                            <BookCopy size={30}/>
                        </a>
                        <a href="/ranking" className="flex justify-center rounded-md p-3 w-fit hover:bg-zinc-500">
                            <ChartNoAxesCombined size={30}/>
                        </a>
                    </div>
            )}
        </div>
    )
}
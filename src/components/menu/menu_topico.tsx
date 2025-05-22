import { BookCopy } from "lucide-react";
import MenuItem from "./menu_item";

interface MenuTopico {
    children: any,
    topicoNome: string,
    url: string
}

export default function MenuTopico(props: MenuTopico) {
    return(
        <div className="flex hover:bg-zinc-500 py-1 px-2 rounded-md text-lg items-center">
            {props.children}
            <MenuItem nomeLink={props.topicoNome} url={`/${props.url}`}/>
        </div>
    )
}
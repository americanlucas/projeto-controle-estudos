import { useContext } from "react";
import MenuItem from "./menu_item";
import { Contexto } from "@/context/Tema";

export default function Menu() {
    const {corFundo, setCorFundo} = useContext(Contexto)

    return (
        <>
            <main className={corFundo? "menu": "menu"}>
                <MenuItem nomeLink='Contador'/>
                <MenuItem nomeLink='Ranking'/>
            </main>

        </>
    )
}
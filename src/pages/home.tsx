import Header from "@/components/header/header";
import Menu from "@/components/menu/menu";
import { MenuProvider } from "@/context/ContextoMenu";
import Tema from "@/context/Tema";
import { useContext } from "react";

export default function Home () {
    const {corFundo} = useContext(Tema)

    return (
        <main className={corFundo ? "main-page-dark" : "main-page-white"}>
            <div className="menu-page">
                <MenuProvider>
                    <Menu titulo="Study Menu"/>
                </MenuProvider>
            </div>
            <div className="header-page">
                <Header titulo="Controle de Estudos"/>
            </div>
        </main>
    )
}
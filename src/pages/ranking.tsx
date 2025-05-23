import Header from "@/components/header/header";
import MainHome from "@/components/main/MainHome";
import Menu from "@/components/menu/menu";
import { MenuProvider } from "@/context/ContextoMenu";
import Tema, { TemaProvider } from "@/context/Tema";
import { useContext } from "react";

export default function Ranking () {
    
    const {corFundo} = useContext(Tema)
    return (
        <main className={corFundo ? "main-page-dark" : "main-page-white"}>
                <div className="menu-page">
                    <MenuProvider>
                        <Menu titulo="Study Menu"/>
                    </MenuProvider>
                </div>
                <div className="flex flex-col w-full">                
                    <div className="header-page">
                        <Header titulo="Controle de Estudos"/>
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <MainHome/>
                    </div>
                </div>
            </main>
    )
}
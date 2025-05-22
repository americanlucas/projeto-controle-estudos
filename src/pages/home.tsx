import Header from "@/components/header/header";
import Menu from "@/components/menu/menu";
import { ColapsaItem } from "@/context/ColapsaItem";
import { ColapsaMenu } from "@/context/ColapsaMenu";
import { Perfil } from "@/context/PerfilDoUsuario";
import { Contexto } from "@/context/Tema";
import { use, useContext, useState } from "react";

export default function Home () {
    const {corFundo, setCorFundo} = useContext(Contexto)
    const {LinkImagem, NomeUsuario} = useContext(Perfil)
    const [colapsaMenu, setColapsaMenu] = useState(true)
    const [colapsaItem, setColapsaItem] = useState(true)

    return (
        <main className={corFundo ? "main-page-dark" : "main-page-white"}>
            <div className="menu-page">
                <Perfil.Provider value={{LinkImagem, NomeUsuario}}>
                    <ColapsaMenu.Provider value={{colapsaMenu, setColapsaMenu}}>
                        <ColapsaItem.Provider value={{colapsaItem, setColapsaItem}}>
                            <Menu titulo="Study Menu"/>
                        </ColapsaItem.Provider>
                    </ColapsaMenu.Provider>
                </Perfil.Provider>
            </div>
            <div className="header-page">
                <Header titulo="Controle de Estudos"/>
            </div>
        </main>
    )
}
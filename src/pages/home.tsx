import Header from "@/components/header/header";
import Menu from "@/components/main/menu/menu";
import { Perfil } from "@/context/PerfilDoUsuario";
import { Contexto } from "@/context/Tema";
import { useContext } from "react";

export default function Home () {
    const {corFundo, setCorFundo} = useContext(Contexto)
    const {LinkImagem, NomeUsuario} = useContext(Perfil)

    return (
        <main className={corFundo ? "main-page-dark" : "main-page-white"}>
            <div className="menu-page">
                <Perfil.Provider value={{LinkImagem, NomeUsuario}}>
                    <Menu/>
                </Perfil.Provider>
            </div>
            <div className="header-page">
                <Header titulo='Controle de Estudos'/>
            </div>
        </main>
    )
}
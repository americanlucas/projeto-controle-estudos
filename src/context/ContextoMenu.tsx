import { createContext, useContext, useState } from "react";

interface MenuContextProps {
    LinkImagem: string,
    NomeUsuario: string,
    colapsaMenu?: boolean,
    colapsaItem?: boolean,
    setColapsaMenu: any,
    setColapsaItem: any
}

interface MenuProvider {
    children: any
}

const ContextoMenu = createContext <MenuContextProps>({} as any)


export function MenuProvider (props: MenuProvider) {

    const [colapsaMenu, setColapsaMenu] = useState(true)
    const [colapsaItem, setColapsaItem] = useState(true)
    const {LinkImagem, NomeUsuario} = useContext(ContextoMenu)

    return(
        <ContextoMenu.Provider value={{
            LinkImagem, NomeUsuario, colapsaMenu, colapsaItem, setColapsaMenu, setColapsaItem
        }}>
            {props.children}
        </ContextoMenu.Provider >
    )
}

export default ContextoMenu;
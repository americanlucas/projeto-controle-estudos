import { createContext, useState } from "react";

interface TemaProps {
    corFundo?: boolean,
    setCorFundo?: any
}

const Tema = createContext <TemaProps>({} as any);

export function TemaProvider (props: any) {

    const [corFundo, setCorFundo] = useState(true)
    return(
        <Tema.Provider value={{
            corFundo, setCorFundo
        }}>
            {props.children}
        </Tema.Provider>
    )
}

export default Tema
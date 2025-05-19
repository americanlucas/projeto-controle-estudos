"use client"

import { Contexto } from "@/context/Tema";
import Home from "@/pages/home";
import { createContext, useState } from "react";



export default function App() {
    const [corFundo, setCorFundo] = useState(true)

  return (
    <>
      <Contexto.Provider value={{corFundo, setCorFundo}}>
        <Home/>
      </Contexto.Provider>
    </>
  );
}

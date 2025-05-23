"use client"

import { TemaProvider } from "@/context/Tema";
import Home from "@/pages/home";

export default function App() {
  return (
    <>
      <TemaProvider>
        <Home/>
      </TemaProvider>
    </>
  );
}

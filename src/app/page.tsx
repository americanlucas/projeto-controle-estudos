"use client"

import { TemaProvider } from "@/context/Tema";
import Home from "@/pages/home";
import { useState } from "react";



export default function App() {
  return (
    <>
      <TemaProvider>
        <Home/>
      </TemaProvider>
    </>
  );
}

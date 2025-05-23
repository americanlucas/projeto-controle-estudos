"use client"
import "@/app/globals.css"
import { TemaProvider } from "@/context/Tema"

export default function _App (props: any) {
	const {Component, pageProps} = props
	return (
		<TemaProvider>
			<Component {...pageProps}/>
		</TemaProvider>
	)
}
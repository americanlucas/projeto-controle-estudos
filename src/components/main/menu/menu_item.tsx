export default function MenuItem(props: any) {
    return(
        <>
            <a className="hover:bg-zinc-500 py-1 px-2 rounded-md text-lg" href={`${props.url}`}><h1>{props.nomeLink}</h1></a>
        </>
    )
}
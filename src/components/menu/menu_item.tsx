interface ItemProps {
    nomeLink: string,
    url: string
}

export default function MenuItem(props: ItemProps) {
    return(
        <>
            <a className="hover:bg-zinc-500 py-1 px-2 rounded-md text-lg" href={`${props.url}`}><h1>{props.nomeLink}</h1></a>
        </>
    )
}
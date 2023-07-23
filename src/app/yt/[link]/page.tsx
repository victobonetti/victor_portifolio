import PageLink from "@/app/(components)/pageLink";

export default function yt({params}:{params:{link:string}}) {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <h1 className=" text-2xl mb-6 font-semibold">Vídeo apresentação</h1>
            <iframe className=" w-full md:w-4/5 lg:w-3/5 h-96 rounded p-2 shadow dark:bg-slate-800 bg-slate-200"  src={`https://www.youtube.com/embed/${params.link}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <PageLink to={"/"} content={"Retornar"} />
        </div>
    )
} 

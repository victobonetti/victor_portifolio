export default function yt(params:{link:string}) {

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center">
            <h1 className=" text-2xl mb-6">Vídeo apresentação</h1>
            <iframe width="560" height="315" src={params.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}
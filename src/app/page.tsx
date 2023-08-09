import './cube.css'

export default function Page() {
    return (
        <div className=" flex flex-col h-full text-center items-center justify-center ">
            <h1 className="text-3xl font-semibold mt-24">Bem-vindo ao meu portifolio!</h1>
            <p className=" mt-2 hidden lg:block">Para acessar as páginas, use o menu lateral.</p>
            <p className=" mt-2 block lg:hidden">Para acessar as páginas, use o menu superior.</p>
            <div className=" container">
                <div className="cube mt-8">
                    <div className="face f-face"></div>
                    <div className="face right"></div>
                    <div className="face left"></div>
                    <div className="face behind"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>
            </div>
        </div>
    )
}
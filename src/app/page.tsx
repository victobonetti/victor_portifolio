export default function Page() {
    return (
        <div className=" flex flex-col text-center p-4">
            <h1 className="text-4xl">Bem-vindo ao meu portifolio!</h1>
            <p className=" mt-2 hidden lg:block">Para acessar as páginas, use o menu lateral.</p>
            <p className=" mt-2 block lg:hidden">Para acessar as páginas, use o menu superior.</p>
        </div>
    )
}
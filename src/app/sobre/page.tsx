export default function Sobre() {
    return (
        <div className=" dark:text-slate-200 text-slate-900 flex justify-start w-full h-full">
            <div className=" dark:bg-slate-700 bg-slate-100 w-full md:w-1/2  mx-auto p-8">
                <h1 className="text-4xl font-bold mb-4">Víctor Bonetti Pegoraro</h1>
                <p className="text-lg font-bold mb-2">Programador</p>
                <p className="mb-6">Gestor de restaurante em transição de carreira para a área de tecnologia, com experiência em informática, suporte, sistemas ERP e criação de soluções personalizadas como freelancer.</p>

                <h2 className="text-2xl font-bold mb-2">EXPERIÊNCIA</h2>
                  <div className="mb-4">
                    <p className="font-bold">Desenvolvedor freelancer</p>
                    <p className="dark:text-slate-300 text-slate-600 italic">Abr. 2022 - atualmente</p>
                </div>
                <div className="mb-4">
                    <p className="font-bold">Gestor de restaurante</p>
                    <p>Beb pizzaria ltda</p>
                    <p className="dark:text-slate-300 text-slate-600 italic">ago. 2020 - atualmente</p>
                </div>
                <div className="mb-4">
                    <p className="font-bold">Auxiliar de suporte técnico</p>
                    <p>O.W. Brasil Informática</p>
                    <p className="dark:text-slate-300 text-slate-600 italic">out. 2019 - jan. 2020</p>
                </div>
                <div className="mb-4">
                    <p className="font-bold">Auxiliar de contabilidade (Jovem aprendiz)</p>
                    <p>Delta Plus Brasil</p>
                    <p className="dark:text-slate-300 text-slate-600 italic">mar. 2019 - out. 2020</p>
                </div>
                <div className="mb-6">
                    <p className="font-bold">Auxiliar de escritório (Jovem aprendiz)</p>
                    <p>Delta Plus Brasil</p>
                    <p className="dark:text-slate-300 text-slate-600 italic">jul. 2018 - mar. 2019</p>
                </div>

                <h2 className="text-2xl font-bold mb-2">EDUCAÇÃO</h2>
                <div className="mb-4">
                    <p className="font-bold">FIAP</p>
                    <p>Bacharelado em Engenharia de software</p>
                    <p className="dark:text-slate-300 text-slate-600 italic">Término em 2026</p>
                </div>

                <h2 className="text-2xl font-bold mb-2">PROJETOS</h2>
                <div className="mb-6">
                    <p className="font-bold">Portfólio</p>
                    <p>Github</p>
                    <p className="dark:text-slate-300 text-slate-600 italic"><a className=" dark:text-blue-400 text-blue-500" href="https://github.com/victobonetti" target="_blank" rel="noopener">https://github.com/victobonetti</a></p>
                </div>

                <h2 className="text-2xl font-bold mb-2">CONTATO</h2>
                <p>victorbonettixd@gmail.com</p>
                <p className="mb-2">+55 (19) 99846-7194</p>

            </div>
        </div >
    )
}
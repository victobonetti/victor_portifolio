import Link from 'next/link';
import { useRouter } from 'next/router';


export default function TesteApi() {

    return (
        <div className=' flex flex-col p-2 lg:p-8'>
            <div className=' w-full flex flex-col border-b mb-8 pb-4'>
                <p className="mb-4">
                    Api para conseguir os setups de instalação mais recentes:
                </p>
                <span className=' mb-4 border rounded p-2 font-mono text-xl'>/api/[usuário]/[repositório]/</span>
                <label className='text-sm'>Exemplo:</label>
                <Link target={'blank'} className="text-blue-500 hover:underline"
                    href="/api/victobonetti/passaregua/"
                >
                    /api/victobonetti/passaregua/
 
                </Link >

            </div>


            <div className='w-full flex flex-col border-b mb-8 pb-4'>
                <p className="mb-4">
                    Api para conseguir a bundle de update mais recente (usada pelo aplicativo desktop):
                </p>
                <span className=' mb-4 border rounded p-2 font-mono text-xl'>/api/[usuário]/[repositório]/[sistema operacional]/[arquitetura]/[versão atual]</span>
                <label className='text-sm'>Exemplos:</label>
                <Link target={'blank'} className="mb-2 text-blue-500 hover:underline"
                    href="https://victor-portifolio.vercel.app/api/victobonetti/passaregua/windows/x64/1.0.2"
                >
                    /api/victobonetti/passaregua/windows/x64/1.0.2
                </Link >
                <Link target={'blank'} className=" mb-2 text-blue-500 hover:underline"
                    href="https://victor-portifolio.vercel.app/api/victobonetti/passaregua/windows/x64/1.0.2"
                >
                    /api/victobonetti/passaregua/darwin/x86/0.0.7

                </Link>
                <Link target={'blank'} className=" text-blue-500 hover:underline"
                    href="https://victor-portifolio.vercel.app/api/victobonetti/passaregua/windows/x64/1.0.2"
                >
                    /api/victobonetti/passaregua/linux/x64/1.0.4

                </Link>

            </div>
        </div>
    );
};


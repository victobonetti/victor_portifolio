'use client'

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';


export default function TesteApi() {

    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(false)

    const fetchApi = async (link: string) => {
        setLoading(true);
        let data = await axios.get(link)
        setResponse(JSON.stringify(data.data));
        setLoading(false);
    }

    return (
        <div className=' w-full lg:w-2/3 flex flex-col p-2 lg:p-8'>
            <div className=' w-full flex flex-col border-b mb-8 pb-4'>
                <h1 className=' text-3xl font-semibold'>Teste de API</h1>
                <p className=' text-sm text-slate-500 mb-4 border-b pb-2'>Clique em um dos links em azul para interagir.</p>
                <p className="mb-4">
                    Api para conseguir os setups de instalação mais recentes:
                </p>
                <span className=' mb-4 border rounded p-2 font-mono text-xl'>/api/[usuário]/[repositório]/</span>
                <label className='text-sm'>Exemplo:</label>
                <p className="text-blue-500 cursor-pointer hover:underline"
                    onClick={() => fetchApi('/api/victobonetti/passaregua/')}

                >
                    /api/victobonetti/passaregua/

                </p  >

            </div>


            <div className='w-full flex flex-col border-b mb-8 pb-4'>
                <p className="mb-4">
                    Api para conseguir a bundle de update mais recente (usada pelo aplicativo desktop):
                </p>
                <span className=' mb-4 border rounded p-2 font-mono text-xl'>/api/[usuário]/[repositório]/[sistema operacional]/[arquitetura]/[versão atual]</span>
                <label className='text-sm'>Exemplos:</label>
                <p className="mb-2 text-blue-500 cursor-pointer hover:underline"
                    onClick={() => fetchApi('/api/victobonetti/passaregua/windows/x64/1.0.2')}
                >
                    /api/victobonetti/passaregua/windows/x64/1.0.2
                </p  >
                <p className=" mb-2 text-blue-500 cursor-pointer hover:underline"
                    onClick={() => fetchApi('/api/victobonetti/passaregua/darwin/x86/0.0.7')}
                >
                    /api/victobonetti/passaregua/darwin/x86/0.0.7

                </p >
                <p className=" text-blue-500 cursor-pointer hover:underline"
                    onClick={() => fetchApi(' /api/victobonetti/passaregua/linux/x64/1.0.4')}
                >
                    /api/victobonetti/passaregua/linux/x64/1.0.4

                </p >

                <p className=' mt-4'>Resposta da requisição:</p>
                {response && !loading &&
                    <div className=' overflow-scroll text-sm p-2 border rounded'>
                        <p className=' font-mono text-justify'>{response}</p>
                    </div>
                }

                {
                    !response && !loading &&
                    <p className=' mt-2 border rounded p-2 font-semibold'>Clique em um dos links para fazer requisição para a API.</p>
                }
                
                {
                    loading && 
                    <p className=' select-none animate-pulse text-blue-500 mt-2 border rounded p-2 font-semibold text-center'>Carregando...</p>
                }


            </div>
        </div>
    );
};


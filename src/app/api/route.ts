import { NextResponse } from "next/server";

export async function GET() {

    return (NextResponse.json({
        updaterExample:
        'https://victor-portifolio.vercel.app/api/victobonetti/passaregua/windows/x64/1.0.2',
        downloaderExample: 'https://victor-portifolio.vercel.app/api/victobonetti/passaregua'
    }))
}

// `Bem-vindo à API de download/update de aplicações desktop.
        
// Api para conseguir os setups de instalação mais recentes (template):
// https://victor-portifolio.vercel.app/api/[usuário]/[repositório]/

// Exemplo de uso:
// https://victor-portifolio.vercel.app/api/victobonetti/passaregua/

// ------

// Api para conseguir a bundle de update mais recente (template):
// https://victor-portifolio.vercel.app/api/[usuário]/[repositório]/[sistema operacional]/[arquitetura]/[versão atual]

// Exemplo de uso:
// https://victor-portifolio.vercel.app/api/victobonetti/passaregua/windows/x64/1.0.2

// `



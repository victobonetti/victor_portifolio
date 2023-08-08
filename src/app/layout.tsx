import './globals.css'
import { Inter } from 'next/font/google'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
// import { useState } from 'react'
import PageLink from './(components)/pageLink';
import Logo from './(components)/logo';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portifólio',
  description: 'Portifólio de Víctor Bonetti',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-br">
      <body className={`${inter.className}`}>
        <main className="  overflow-x-hidden flex justify-center w-screen h-fit min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
          <div className="h-screen w-screen flex flex-col lg:flex-row">
            <aside className=" border-b lg:border-r dark:border-slate-800 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 absolute z-50 pb-4 w-screen flex flex-col lg:pl-6 lg:w-52 lg:h-full lg:left-0 justify-between pt-6">
              <div>
                <span className="flex flex-col w-full items-center lg:items-start select-none">
                  <Logo />
                </span>
                <nav className="mt-1 w-full justify-evenly flex lg:flex-col">
                  <PageLink to={"/projetos"} content={"Projetos"} />
                  <PageLink to={"/sobre"} content={"Sobre mim"} />
                </nav>
              </div>
            </aside>
            <div className="pb-8 lg:pt-8 pt-36 lg:pl-52 justify-center justify-self-end h-fit w-full flex flex-wrap">
              {children}</div>
          </div>
        </main ></body>
    </html>
  )
}

'use client';

import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { usePathname } from 'next/navigation';

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

  const [darkmode, setDarkmode] = useState(false);
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${darkmode ? "dark" : ""} ${inter.className}`}>
        <main className="  overflow-x-hidden flex justify-center w-screen h-fit min-h-screen bg-slate-50 text-slate-900 dark:bg-gray-800 dark:text-gray-100">
          <div className="absolute z-20 top-6 right-8">
            <FontAwesomeIcon
              onClick={() => setDarkmode(!darkmode)}
              className="cursor-pointer dark:text-gray-100 text-slate-900 h-6"
              icon={darkmode ? faSun : faMoon}
            />
          </div>
          <div className="h-screen w-screen flex flex-col lg:flex-row">
            <aside className="bg-slate-50 text-slate-900 dark:bg-gray-800 dark:text-gray-100 absolute pb-4 w-screen flex flex-col lg:pl-6 lg:w-52 lg:h-full lg:left-0 justify-between pt-6">
              <div>
                <span className="flex flex-col w-full items-center lg:items-start select-none">
                  <div className="text-center lg:text-start">
                    <h1 className="font-bold text-2xl dark:text-gray-100 text-slate-900">Portifólio</h1>
                    <p className="text-xs dark:text-gray-300 text-slate-700">By Víctor Bonetti Pegoraro</p>
                  </div>
                </span>
                <nav className="mt-1 w-full justify-evenly flex lg:flex-col">
                  <Link href={"/"}><button className={` ${pathname == '/' ? " font-semibold text-slate-900 dark:text-gray-100 " : " dark:text-gray-300 text-slate-700 "} hover:underline self-start lg:mt-3 mt-1 lg:ml-1`}>Projetos</button></Link>
                  <Link href={"/sobre"}><button className={` ${pathname == '/sobre' ? " font-semibold text-slate-900 dark:text-gray-100" : " dark:text-gray-300 text-slate-700 "} hover:underline  self-start mt-1 lg:ml-1`}>Sobre mim</button></Link>
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

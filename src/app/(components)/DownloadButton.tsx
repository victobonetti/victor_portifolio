'use client'

import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

interface standardDownloadResponseProps {
    version: string,
    windows: string,
    linux: string,
    darwin: string
}

export default function DownloadButton({downloadData}: {downloadData: standardDownloadResponseProps}) {

    return (
        <details className=" w-fit  mt-8 md:mt-0 cursor-pointer mb-2">
            <summary className=" btn dark:bg-slate-300 dark:text-slate-800 text-slate-100 bg-slate-900 dark:hover:bg-slate-400 hover:bg-slate-950 focus:outline-none font-medium text-sm  px-2.5 py-1.5 rounded">Downloads</summary>
            <ul className="  bg-slate-50 z-30 shadow rounded ">
                <Link href={String(downloadData?.windows)}><li className="flex items-center p-1 hover:bg-slate-200"><span><FontAwesomeIcon className="text-slate-600 h-6 mr-2" icon={faDownload} /></span><p className="text-slate-700">Windows</p></li></Link>
                <Link href={String(downloadData?.darwin)}><li className="flex items-center p-1 hover:bg-slate-200"><span><FontAwesomeIcon className="text-slate-600 h-6 mr-2" icon={faDownload} /></span><p className="text-slate-700">MacOs</p>  </li></Link>
                <Link href={String(downloadData?.linux)}><li className="flex items-center p-1 hover:bg-slate-200"><span><FontAwesomeIcon className="text-slate-600 h-6 mr-2" icon={faDownload} /></span><p className="text-slate-700">Linux</p>  </li></Link>
            </ul>
        </details>
    )
}
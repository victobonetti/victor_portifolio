'use client'

import Image, { StaticImageData } from 'next/image';
import Container from './container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface portifolioProps {
    projectImage: StaticImageData, //bg
    projectType: string, //Aplicativo desktop
    projectTitle: string, //FrilaHub
    stackList: string[]; //'[rust, typescript, react]'
    projectResume: string, //Aplicativo para gestão de freelancers de restaurante e consumo local de funcionários.
    listInfos: string[]   // ['Cadastre produtos e funcionários, abra contas fiado e faça pagamentos para reduzir saldos pendentes' , 'Gere relatórios de consumo mensal dos funcionários e gasto com freelancers']
    repositoryName: string,
    repositoryOwnerName: string,

}

interface standardDownloadResponseProps {
    version: string,
    windows: string,
    linux: string,
    darwin: string
}


export default function PortifolioProject(props: portifolioProps) {

    const [downloadData, setDownloadData] = useState<standardDownloadResponseProps>();

    const fetch = async () => {
        const URL = `${window.location.protocol}//${window.location.host}`
        axios.get(`${URL}/api/${props.repositoryOwnerName}/${props.repositoryName}/`).then((data) => {
            console.log(data.data)
            setDownloadData(data.data)
        }).catch(e => {
            console.log("Erro:" + e)
        })
    }

    useEffect(() => {
        fetch()
    },[])

    return (
        <Container>
            {!downloadData && <FontAwesomeIcon className=' h-16 animate-pulse' icon={faCoffee} />}
            {downloadData &&
                <div className=" flex flex-col lg:flex-row mx-8 lg:mx-28">
                    <Image className="rounded object-cover lg:w-1/2 w-full mb-4 lg:mb-0" src={props.projectImage} alt="Plano de fundo" />
                    <div className=" flex flex-col lg:ml-4 lg:w-96 w-full text-sm dark:text-slate-300">
                        <div className="flex justify-between ">
                            <div>
                                <p className="ml-0.5 text-sm dark:text-slate-400 text-slate-500">{props.projectType}</p>
                                <h3 className="font-semibold text-4xl">{props.projectTitle}</h3>
                            </div>
                            <p className="h-fit px-2 py-1 dark:bg-slate-200 dark:text-slate-700 bg-slate-600 text-slate-100 rounded-xl text-sm">{downloadData?.version}</p>
                        </div>

                        <p className="px-1 text-justify dark:text-slate-400 text-slate-500">Elaborado com &nbsp;
                            {props.stackList.map((stack, i) => {

                                let text: string;

                                if (i == props.stackList.length - 1) {
                                    text = `${stack}.`
                                } else if (i == props.stackList.length - 2) {
                                    text = `${stack} e `
                                } else {
                                    text = `${stack}, `
                                }

                                return (
                                    < span key={i} className="font-semibold" >{text}</span>
                                )


                            })}
                        </p>

                        <p className="pb-4 border-b px-1 mt-4 text-justify">{props.projectResume}</p>
                        <ul className="list-disc pl-5 pt-4">
                            {props.listInfos.map((info, i) => <li key={i} className="list-item mb-2">{info}</li>)}
                        </ul>
                        <div className="h-full flex w-full items-end justify-between">
                            <Link target='blank' href={`https://github.com/${props.repositoryOwnerName}/${props.repositoryName}/`}><FontAwesomeIcon className="h-10 opacity-90 hover:opacity-100 cursor-pointer" icon={faGithub} /></Link>
                            {downloadData &&

                                <details className=" cursor-pointer dropdown">
                                    <summary className=" btn dark:bg-slate-300 dark:text-slate-800 text-slate-100 bg-slate-900 hover:bg-slate-900 focus:outline-none font-medium text-sm px-5 py-2.5">Downloads</summary>

                                    <ul className="  bg-slate-50 absolute shadow menu dropdown-content z-[1] rounded-box w-36">
                                        <Link href={String(downloadData?.windows)}><li className="flex items-center p-1 hover:bg-slate-200"><span><FontAwesomeIcon className="text-slate-600 h-6 mr-2" icon={faDownload} /></span><p className="text-slate-700">Windows</p></li></Link>
                                        <Link href={String(downloadData?.darwin)}><li className="flex items-center p-1 hover:bg-slate-200"><span><FontAwesomeIcon className="text-slate-600 h-6 mr-2" icon={faDownload} /></span><p className="text-slate-700">MacOs</p>  </li></Link>
                                        <Link href={String(downloadData?.linux)}><li className="flex items-center p-1 hover:bg-slate-200"><span><FontAwesomeIcon className="text-slate-600 h-6 mr-2" icon={faDownload} /></span><p className="text-slate-700">Linux</p>  </li></Link>
                                    </ul>

                                </details>
                            }
                        </div>
                    </div>
                </div>
            }
        </Container >
    )
}
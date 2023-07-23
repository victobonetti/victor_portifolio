import Image, { StaticImageData } from 'next/image';
import Container from './container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface portifolioProps {
    projectImage: StaticImageData, //bg
    projectType: string, //Aplicativo desktop
    projectTitle: string, //FrilaHub
    stackList: string[], //'[rust, typescript, react]'
    projectResume: string, //Aplicativo para gestão de freelancers de restaurante e consumo local de funcionários.
    repository?: gitHubProps,
    listInfos: string[],   // ['Cadastre produtos e funcionários, abra contas fiado e faça pagamentos para reduzir saldos pendentes' , 'Gere relatórios de consumo mensal dos funcionários e gasto com freelancers']
    haveDownload: boolean,
    acessLink?: string
    youtubelink?: string
}

interface gitHubProps {
    repositoryName: string,
    repositoryOwnerName: string,
}

interface standardDownloadResponseProps {
    version: string,
    windows: string,
    linux: string,
    darwin: string
}


export default async function PortifolioProject(props: portifolioProps) {

    const fetch = async () => {
        // const URL = `${window.location.protocol}//${window.location.host}`
        try {
            if (props.haveDownload && props.repository) {
                console.log("Fetching data...")
                let data = await axios.get(`https://victor-portifolio.vercel.app/api/${props.repository.repositoryOwnerName}/${props.repository.repositoryName}/`);
                console.log(data);
                return data.data
            }
        } catch (e) {
            console.error("Error fetching data.")
            return undefined;
        }

    }

    let downloadData: standardDownloadResponseProps = await fetch();

    return (
        <Container>
            <div className=" md:w-11/12 w-full border border-slate-300 dark:border-slate-600 rounded shadow-inner dark:bg-slate-800 bg-slate-100 flex flex-col md:flex-row ">
                <Image className=" rounded opacity-90 object-cover object-left-top w-full h-48 md:h-96 md:w-1/2 mb-4 md:mb-0" src={props.projectImage} alt="Plano de fundo" />
                <div className=" p-2 flex flex-col md:ml-4 md:w-1/2 w-full text-sm dark:text-slate-300">
                    <div className="flex justify-between ">
                        <div>
                            <p className="ml-0.5 text-sm dark:text-slate-400 text-slate-500">{props.projectType}</p>
                            <h3 className="font-semibold text-4xl">{props.projectTitle}</h3>
                        </div>
                        {downloadData?.version.length > 1 &&
                            <p className="h-fit px-2 py-1 dark:bg-slate-200 dark:text-slate-700 bg-slate-600 text-slate-100 rounded-xl text-sm">{downloadData?.version}</p>
                        }
                    </div>

                    <p className="px-1 text-justify dark:text-slate-400 text-slate-500">Elaborado com&nbsp;
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

                    <p className="pb-4 border-b dark:border-b-slate-600 px-1 mt-4 text-justify">{props.projectResume}</p>
                    <ul className="list-disc pl-5 pt-4">
                        {props.listInfos.map((info, i) => <li key={i} className="list-item mb-2">{info}</li>)}
                        {
                            props.youtubelink && 
                            <Link target='blank' href={props.youtubelink}><button className=' dark:bg-red-500  dark:hover:bg-red-400 text-red-50 bg-red-700 hover:bg-red-800 focus:outline-none font-medium text-sm px-5 py-2.5 flex items-center'><FontAwesomeIcon className='h-6 mr-2' icon={faYoutube} /> Ver apresentação</button></Link>

                        }
                    </ul>
                    <div className="h-full flex w-full items-end justify-between">
                        {props.repository &&
                            <Link target='blank' href={`https://github.com/${props.repository.repositoryOwnerName}/${props.repository.repositoryName}/`}><FontAwesomeIcon className="h-6 opacity-90 hover:opacity-100 cursor-pointer" icon={faGithub} /></Link>
                        }
                        {props.acessLink &&
                            <div className=' mt-8 w-full flex justify-end'>
                                <Link target='blank' href={props.acessLink}><button className=' dark:bg-blue-300 dark:text-blue-950 dark:hover:bg-blue-400 text-blue-50 bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm px-5 py-2.5'>Acessar</button></Link>
                            </div>
                        }

                        {downloadData &&
                            <details className="  mt-8 md:mt-0 cursor-pointer ">
                                <summary className=" btn dark:bg-slate-300 dark:text-slate-800 text-slate-100 bg-slate-900 dark:hover:bg-slate-400 hover:bg-slate-950 focus:outline-none font-medium text-sm px-5 py-2.5">Downloads</summary>
                                <ul className="  bg-slate-50 z-30 shadow rounded-box w-36">
                                    <Link href={String(downloadData?.windows)}><li className="flex items-center p-1 hover:bg-slate-200"><span><FontAwesomeIcon className="text-slate-600 h-6 mr-2" icon={faDownload} /></span><p className="text-slate-700">Windows</p></li></Link>
                                    <Link href={String(downloadData?.darwin)}><li className="flex items-center p-1 hover:bg-slate-200"><span><FontAwesomeIcon className="text-slate-600 h-6 mr-2" icon={faDownload} /></span><p className="text-slate-700">MacOs</p>  </li></Link>
                                    <Link href={String(downloadData?.linux)}><li className="flex items-center p-1 hover:bg-slate-200"><span><FontAwesomeIcon className="text-slate-600 h-6 mr-2" icon={faDownload} /></span><p className="text-slate-700">Linux</p>  </li></Link>
                                </ul>
                            </details>
                        }
                    </div>
                </div>
            </div>
        </Container>
    )
}

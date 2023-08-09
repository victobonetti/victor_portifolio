

import { StaticImageData } from 'next/image';
import Container from './container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Carrousel from './carrousel';
import DownloadButton from './DownloadButton';
import { gitHubProps } from '../(interfaces)/gitHubProps';
import fetchDownloadData from '../(services)/fetchDownloadData';
import { standardDownloadResponseProps } from '../(interfaces)/standardDownloadResponseProps';

interface portifolioProps {
    projectImage: StaticImageData[], //bg
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

export default async function PortifolioProject(props: portifolioProps) {

    let downloadData: standardDownloadResponseProps | undefined;
    if (props.haveDownload && props.repository) {
        downloadData = await fetchDownloadData(props.repository)
    }

    return (
        <Container>
            <div className=" md:w-11/12 w-full border border-slate-300 dark:border-slate-600  shadow-inner dark:bg-slate-800 bg-slate-100 flex flex-col md:flex-row ">
                <Carrousel images={props.projectImage} />
                <div className=" p-2 flex flex-col md:ml-4 md:w-5/12 w-full text-sm dark:text-slate-300">
                    <div className="flex justify-between ">
                        <div>
                            <p className="ml-0.5 text-sm dark:text-slate-400 text-slate-500">{props.projectType}</p>
                            <h3 className="font-semibold text-4xl">{props.projectTitle}</h3>
                        </div>
                        {downloadData && downloadData.version.length > 1 &&
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

                    </ul>
                    <div className="h-full flex w-full items-end justify-between">
                        <div>
                            {props.repository &&
                                <Link target='blank' href={`https://github.com/${props.repository.repositoryOwnerName}/${props.repository.repositoryName}/`}><FontAwesomeIcon className="h-8 opacity-90 hover:opacity-100 cursor-pointer" icon={faGithub} /></Link>
                            }
                        </div>

                        <div className=' mt-8 w-fit flex flex-col items-end justify-end'>
                            {props.acessLink &&
                                <Link target='blank' href={props.acessLink}><button className=' w-fit mb-2 dark:bg-blue-300 dark:text-blue-950 dark:hover:bg-blue-400 text-blue-50 bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm px-2.5 py-1.5 rounded'>Acessar</button></Link>
                            }
                            {
                                downloadData &&
                                < DownloadButton downloadData={downloadData} />
                            }
                            {
                                props.youtubelink &&
                                <Link href={props.youtubelink}><button className=' w-fit dark:bg-red-500  dark:hover:bg-red-400 text-red-50 bg-red-700 hover:bg-red-800 focus:outline-none font-medium text-sm  px-2.5 py-1.5 rounded flex items-center'><FontAwesomeIcon className='h-6 mr-2' icon={faYoutube} /> Ver apresentação</button></Link>
                            }
                        </div>



                    </div>
                </div>
            </div>
        </Container>
    )
}

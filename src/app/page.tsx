import Image from "next/image";
import bg from '../../public/bg.jpg'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import Container from "./(components)/container";
import Link from "next/link";
import PortifolioProject from "./(components)/project";

export default function Home() {

  return (
    <PortifolioProject projectImage={bg}
      projectType={"Aplicativo desktop"}
      projectTitle={"FrilaHub"}
      stackList={['rust', 'typescript', 'react', 'sqlite']}
      projectResume={"Aplicativo para gestão de freelancers de restaurante e consumo local de funcionários."}
      listInfos={['Cadastre produtos e funcionários, abra contas fiado e faça pagamentos para reduzir saldos pendentes',
        'Gere relatórios de consumo mensal dos funcionários e gasto com freelancers']}
      repositoryName={`FrilaHub`}
      repositoryOwnerName={`victobonetti`} />
  )
}
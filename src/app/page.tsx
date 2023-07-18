import bellaPizzaria from '../../public/bellaPizzaria_photo.png'
import frilahub from '../../public/frilaHub_photo.png'
import PortifolioProject from "./(components)/project";

export default function Home() {

  return (
    <>
      <PortifolioProject projectImage={frilahub}
        projectType={"Aplicativo desktop"}
        projectTitle={"FrilaHub"}
        stackList={['Rust', 'Typescript', 'React', 'Sqlite']}
        projectResume={"Aplicativo para gestão de freelancers de restaurante e consumo local de funcionários."}
        listInfos={['Cadastre produtos e funcionários, abra contas fiado e faça pagamentos para reduzir saldos pendentes',
          'Gere relatórios de consumo mensal dos funcionários e gasto com freelancers']}
        repository={{ repositoryName: `PassaRegua`, repositoryOwnerName: `victobonetti` }}
        haveDownload={true} />

      <PortifolioProject projectImage={bellaPizzaria}
        projectType={"Site"}
        projectTitle={"Site para Pizzaria."}
        stackList={['React']}
        projectResume={"Site institucional para pizzaria."}
        listInfos={['Site estilo landing page para conversão de clientes.']}
        haveDownload={false}
        acessLink={`https://www.bellapizzaria.com.br/`} />
    </>


  )
}
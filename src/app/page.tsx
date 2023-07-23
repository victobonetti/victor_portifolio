import bellaPizzaria from '../../public/bellaPizzaria_photo.png'
import pr from '../../public/passaregua.png'
import PortifolioProject from "./(components)/project";

export default function Home() {
  return (
    <>
      <PortifolioProject projectImage={pr}
        projectType={"Aplicativo desktop"}
        projectTitle={"PassaRégua"}
        stackList={['Rust', 'Typescript', 'React', 'Sqlite']}
        projectResume={"Aplicativo para gestão de contas fiado."}
        listInfos={['Cadastre produtos e pessoas, abra contas fiado e faça pagamentos para reduzir saldos pendentes'
        ]}
        repository={{ repositoryName: `PassaRegua`, repositoryOwnerName: `victobonetti` }}
        haveDownload={true}
        youtubelink='/yt/J---aiyznGQ'
        />

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
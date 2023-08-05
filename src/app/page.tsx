import bellaPizzaria from '../../public/bellaPizzaria_photo.png'
import pr from '../../public/passaregua.png'
import pra from '../../public/passaregua-accounts.png'
import PortifolioProject from "./(components)/project";
import portifolioprint from '../../public/print-portifolio.png'


export default function Home() {
  return (
    <>
      <PortifolioProject projectImage={[pr, pra]}
        projectType={"Aplicativo desktop"}
        projectTitle={"PassaRégua"}
        stackList={['Rust', 'Typescript', 'React', 'Sqlite']}
        projectResume={"Aplicativo para gestão de contas fiado."}
        listInfos={['Operações CRUD: Cadastre produtos e pessoas, abra contas fiado e faça pagamentos para reduzir saldos pendentes.', 'Conexão ao banco de dados, pool de conexões.', 'Download de atualizações de forma automática através de requisição de uma API pelo próprio software.'
        ]}
        repository={{ repositoryName: `PassaRegua`, repositoryOwnerName: `victobonetti` }}
        haveDownload={true}
        youtubelink='/yt/J---aiyznGQ'
      />

      <PortifolioProject projectImage={[bellaPizzaria]}
        projectType={"Site"}
        projectTitle={"Site para Pizzaria."}
        stackList={['React']}
        projectResume={"Site institucional para pizzaria."}
        listInfos={['Site estilo landing page para conversão de clientes.']}
        haveDownload={false}
        acessLink={`https://www.bellapizzaria.com.br/`} />


      <PortifolioProject projectImage={[portifolioprint]}
        projectType={"Site"}
        projectTitle={"Este portifólio."}
        stackList={['React']}
        projectResume={"Portifólio."}
        listInfos={['Portifólio para exibição de projetos pessoais.', 'Api conectada ao GitHub para atualizar versão disponível para download neste site e update automático de aplicativos desktop disponibilizados.']}
        haveDownload={false}
        repository={{ repositoryName: `victor_portifolio`, repositoryOwnerName: `victobonetti` }} />
    </>


  )
}
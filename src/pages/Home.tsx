import NavBar from '../components/NavBar'
import Section from '../components/Section'
import Footer from '../components/Footer'

import { useGetPopularMoviesQuery } from '../services/api'

import dune from '../assets/images/dune.png'
import pooh from '../assets/images/kung_fu_panda_4.png'
import poorThings from '../assets/images/poor_things.png'
import deadpool from '../assets/images/deadpool.png'
import matadorAluguel from '../assets/images/matador_de_aluguel.png'
import wonka from '../assets/images/wonka.png'
import oppenheimer from '../assets/images/oppenheimer.png'

// import hxh from '../assets/images/hunter_hunter.png'
// import fallout from '../assets/images/fallout.png'
// import friends from '../assets/images/friends.png'
// import got from '../assets/images/game_of_thrones.png'
// import mrRobot from '../assets/images/mr_robot.png'

// import emmaStone from '../assets/images/emma_stone.png'
// import hiroyukiSanada from '../assets/images/hiroyuki_sanada.png'
// import keanuReeves from '../assets/images/keanu_reeves.png'
// import sydneySweeney from '../assets/images/sydney_sweeney.png'
// import timotheChalamet from '../assets/images/timothe_chalamet.png'

const Home = () => {
  const { data } = useGetPopularMoviesQuery()
  console.log(data)
  const filmes = [
    {
      titulo: 'Duna 2',
      image: dune,
      genero: ['ficção cientifica', 'Aventura'],
      duracao: '2h 21m',
      faixaEtaria: '14',
      lancamento: '08-12-2023 (BR)',
      sinopse:
        '"Duna: Parte Dois" continua a explorar a viagem de Paul Atreides que agora se une a Chani e aos Fremen para vingar a conspiração que destruiu a sua família. Ao enfrentar uma escolha entre o amor e o destino do universo, lutará para evitar o futuro terrível que só ele pode prever.'
    },
    {
      titulo: 'Kung Fu panda 4',
      image: pooh,
      genero: ['Animação', 'Ação', 'Família'],
      duracao: '1h 34m',
      faixaEtaria: 'L',
      lancamento: '21-03-2024 (BR)',
      sinopse:
        'Po está prestes a tornar-se o novo líder espiritual do Vale da Paz, mas antes disso, ele deve encontrar um sucessor para se tornar o novo Guerreiro Dragão. Parece que ele encontra um em Zhen, uma raposa com muitas habilidades promissoras, mas que não gosta muito da ideia de Po treiná-lo.'
    },
    {
      titulo: 'Pobres Criaturas',
      image: poorThings,
      genero: ['Ficção científica', 'Romance', 'Comédia'],
      duracao: '2h 21m',
      faixaEtaria: '18',
      lancamento: '08-12-2023 (BR)',
      sinopse:
        'A fantástica evolução de Bella Baxter, uma mulher ressuscitada pelo brilhante e heterodoxo médico Godwin Baxter. Sob a protecção de Baxter, Bella quer aprender. Sedenta por conhecer o mundo, foge com Duncan Wedderburn, um advogado elegante e debochado, numa aventura vertiginosa. Livre dos preconceitos do seu tempo, Bella cresce firme no propósito de defender a igualdade e a libertação.'
    },
    {
      titulo: 'Deadpool & Wolverine',
      image: deadpool,
      genero: ['Comédia', 'Ficção científica', 'Ação'],
      duracao: 'em breve',
      faixaEtaria: '16',
      lancamento: '25-07-2024 (BR)',
      sinopse: ''
    },
    {
      titulo: 'Road House',
      image: matadorAluguel,
      genero: ['Comédia', 'Ficção científica', 'Ação'],
      duracao: '1h 54m',
      faixaEtaria: '16',
      lancamento: '21-03-2024 (BR)',
      sinopse:
        'Neste remake cheio de adrenalina do clássico cult dos anos 80, Dalton, ex-lutador do UFC, consegue um emprego como segurança num bar de beira de estrada em Florida Keys e descobre que aquele paraíso não é bem o que parece.'
    },
    {
      titulo: 'Wonka',
      image: wonka,
      genero: ['Comédia', 'Família', 'Fantasia'],
      duracao: '1h 57m',
      faixaEtaria: 'PG',
      lancamento: '07-12-2023 (BR)',
      sinopse:
        'Um jovem Willy Wonka embarca numa missão para espalhar a alegria através do chocolate e rapidamente se torna um fenómeno.'
    },
    {
      titulo: 'Oppenheimer',
      image: oppenheimer,
      genero: ['Drama', 'História'],
      duracao: '3h',
      faixaEtaria: '16',
      lancamento: '20-07-2023 (BR)',
      sinopse:
        'A história do envolvimento de J. Robert Oppenheimer na criação da bomba atómica durante a Segunda Guerra Mundial.'
    }
  ]

  return (
    <div className="flex flex-col relative">
      <NavBar />
      <div className="pt-24 lg:ps-36 lg:pt-0">
        <Section title="Filmes da Semana" slides={filmes} />
        <Section title="Tendência de séries" slides={filmes} />
        <Section title="Famosos do momento" slides={filmes} />
        <div className="-z-10 w-full h-full fixed top-0 left-0 bg-body-pattern"></div>
        <Footer />
      </div>
    </div>
  )
}

export default Home

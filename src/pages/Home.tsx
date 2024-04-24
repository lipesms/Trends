import NavBar from '../components/NavBar'
import Section from '../components/Section'
import Footer from '../components/Footer'

import dune from '../assets/images/dune.png'
import pooh from '../assets/images/kung_fu_panda_4.png'
import trash from '../assets/images/madame_web.png'
import poorThings from '../assets/images/poor_things.png'
import damsel from '../assets/images/damsel.png'
import godzilla from '../assets/images/godzilla.png'

import hxh from '../assets/images/hunter_hunter.png'
import fallout from '../assets/images/fallout.png'
import friends from '../assets/images/friends.png'
import got from '../assets/images/game_of_thrones.png'
import mrRobot from '../assets/images/mr_robot.png'

import emmaStone from '../assets/images/emma_stone.png'
import hiroyukiSanada from '../assets/images/hiroyuki_sanada.png'
import keanuReeves from '../assets/images/keanu_reeves.png'
import sydneySweeney from '../assets/images/sydney_sweeney.png'
import timotheChalamet from '../assets/images/timothe_chalamet.png'

const Home = () => {
  const filmes = [dune, pooh, trash, poorThings, damsel, godzilla]
  const series = [hxh, fallout, friends, got, mrRobot]
  const famosos = [
    emmaStone,
    hiroyukiSanada,
    keanuReeves,
    sydneySweeney,
    timotheChalamet
  ]

  return (
    <div className="flex flex-col relative bg-primary-blue ">
      <NavBar />
      <div className="pt-36 lg:ps-52 lg:pt-0">
        <Section title="Filmes da Semana" slides={filmes} />
        <Section title="Tendência de séries" slides={series} />
        <Section title="Famosos do momento" slides={famosos} />
        <Footer />
      </div>
    </div>
  )
}

export default Home

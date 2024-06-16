import Loader from '../components/Loader'
import HomeSection from '../components/HomeSection'

import {
  useGetPopularMoviesQuery,
  useGetPopularPersonQuery,
  useGetPopularTvQuery
} from '../services/api'
import { ordPopularFamous } from '../Utils'

const Home = () => {
  const { data: movies } = useGetPopularMoviesQuery()
  const { data: tv } = useGetPopularTvQuery()
  const { data: famous } = useGetPopularPersonQuery()

  if (movies && tv && famous) {
    const ordFamous = ordPopularFamous(famous.results)
    console.log(ordFamous)

    return (
      <div>
        <div className="pt-24 px-8 flex flex-col font-display select-none lg:w-full lg:items-start xl:ps-40 xl:pt-10">
          <div className="w-full pt-8 xl:ps-14">
            <h2 className="text-3xl font-bold text-center xl:text-5xl xl:text-start">
              Bem-vindo!
            </h2>
            <p className="text-2xl text-center pt-4 xl:text-3xl xl:text-start">
              Acompanhe as tendências dos filmes, séries e estrelas de
              hollywood.
            </p>
          </div>
          <HomeSection
            title="Filmes em destaque hoje"
            dados={movies.results}
            link="films"
          />
          <HomeSection
            title="Séries populares do dia"
            dados={tv.results}
            link="series"
          />
          <HomeSection
            title="Famosos do momento"
            dados={ordFamous}
            type="person"
            link="famous"
          />
        </div>
      </div>
    )
  }
  return <Loader />
}

export default Home

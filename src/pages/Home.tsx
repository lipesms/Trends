import Loader from '../components/Loader'
import MovieSection from '../components/sections/MovieSection'
import Footer from '../components/Footer'
import {
  useGetPopularMoviesQuery,
  useGetPopularPersonQuery,
  useGetPopularTvQuery
} from '../services/api'

const Home = () => {
  const { data: movies } = useGetPopularMoviesQuery()
  const { data: tv } = useGetPopularTvQuery()
  const { data: person } = useGetPopularPersonQuery()

  if (movies && tv && person) {
    return (
      <div>
        <div className="pt-24 px-8 flex flex-col lg:ps-40 lg:w-full lg:items-start lg:pt-10 font-display">
          <div className="pt-4 lg:ps-14">
            <h2 className="text-3xl font-bold text-center lg:text-start lg:text-5xl">
              Bem-vindo!
            </h2>
            <p className="text-2xl text-center pt-4 lg:text-start lg:text-3xl">
              Acompanhe as tendências dos filmes, séries e estrelas de
              hollywood.
            </p>
          </div>
          <MovieSection
            title="Filmes em destaque hoje"
            dados={movies.results}
            link="/films"
          />
          <MovieSection
            title="Séries populares do dia"
            dados={tv.results}
            link="/series"
          />
          <MovieSection
            title="Famosos do momento"
            dados={person!.results}
            type="person"
            link="/persons"
          />
        </div>
        <Footer />
      </div>
    )
  }

  return <Loader />
}

export default Home

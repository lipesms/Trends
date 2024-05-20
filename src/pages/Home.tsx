import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import {
  useGetPopularMoviesQuery,
  useGetPopularTvQuery,
  useGetPopularPersonQuery
} from '../services/api'
import MovieSection from '../components/sections/MovieSection'
import TvSection from '../components/sections/TvSections'
import PersonSection from '../components/sections/PersonSection'

const Home = () => {
  const { data: movies } = useGetPopularMoviesQuery()
  const { data: tv } = useGetPopularTvQuery()
  const { data: person } = useGetPopularPersonQuery()

  if (!movies || !tv || !person) {
    return <h3>Carregando...</h3>
  } else {
    return (
      <div className="flex flex-col relative">
        <NavBar />
        <div className="pt-24 lg:ps-36 lg:pt-0">
          <MovieSection title="Filmes da Semana" dados={movies?.results} />
          <TvSection title="Tendência de séries" dados={tv?.results} />
          <PersonSection
            title="Populares de hollywood"
            dados={person.results}
          />
          <div className="-z-10 w-full h-full fixed top-0 left-0 bg-body-pattern"></div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Home

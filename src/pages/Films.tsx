import Loader from '../components/Loader'
import TvAndMovieCard from '../components/TvAndMovie'
import { useGetPopularMoviesQuery } from '../services/api'

const Films = () => {
  const { data: movies } = useGetPopularMoviesQuery()

  if (movies) {
    return (
      <div className="w-100 pt-24 px-8 flex flex-col lg:ps-40 lg:w-full lg:items-start lg:pt-10">
        <div className="pt-8 lg:ps-14 lg:pt-4 min-w-full">
          <h2 className="text-4xl font-bold text-center lg:text-start font-display">
            Filmes em destaque hoje!
          </h2>
          <div className="pt-9 lg:pt-10">
            {movies.results.map((movie, i) => {
              if (i >= 0 && i <= 9) {
                return (
                  <TvAndMovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    overview={movie.overview}
                    poster_path={movie.poster_path}
                    backdrop_path={movie.backdrop_path}
                    vote_average={Math.round(movie.vote_average * 10)}
                    odd={i % 2 != 0}
                    link="films"
                  />
                )
              }
            })}
          </div>
        </div>
      </div>
    )
  }
  return <Loader />
}

export default Films

import { checkPopularMovieItems } from '../Utils'
import Loader from '../components/Loader'
import TvAndMovieCard from '../components/TvAndMovie'
import { useGetPopularMoviesQuery } from '../services/api'

const Films = () => {
  const { data } = useGetPopularMoviesQuery()

  if (data) {
    const movies = checkPopularMovieItems(data.results)
    return (
      <div className="w-100 pt-24 px-8 flex flex-col select-none lg:w-full lg:items-start xl:ps-40 xl:pt-10">
        <div className="pt-8 min-w-full xl:ps-14 xl:pt-4">
          <h2 className="text-4xl font-bold text-center lg:text-start font-display">
            Filmes em destaque hoje!
          </h2>
          <div className="pt-9 lg:pt-10">
            {movies.map((movie, i) => {
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

import FilmsCard from '../components/FilmCards'
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
                  <FilmsCard
                    backdrop_path={movie.backdrop_path}
                    id={movie.id}
                    overview={movie.overview}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    key={movie.id}
                    odd={i % 2 != 0}
                  />
                )
              }
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Films
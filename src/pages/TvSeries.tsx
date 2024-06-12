import FilmsCard from '../components/FilmCards'
import { useGetPopularTvQuery } from '../services/api'

const TvSeries = () => {
  const { data: series } = useGetPopularTvQuery()

  if (series) {
    return (
      <div className="w-100 pt-24 px-8 flex flex-col lg:ps-40 lg:w-full lg:items-start lg:pt-10">
        <div className="pt-8 lg:ps-14 lg:pt-4 min-w-full">
          <h2 className="text-4xl font-bold text-center lg:text-start font-display">
            Filmes em destaque hoje!
          </h2>
          <div className="pt-9 lg:pt-10">
            {series.results.map((serie, i) => {
              if (i >= 0 && i <= 9) {
                return (
                  <FilmsCard
                    key={serie.id}
                    id={serie.id}
                    title={serie.name}
                    overview={serie.overview}
                    poster_path={serie.poster_path}
                    backdrop_path={serie.backdrop_path}
                    vote_average={Math.round(serie.vote_average * 10)}
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

export default TvSeries

import { checkPopularTvItems } from '../Utils'
import Loader from '../components/Loader'
import TvAndMovieCard from '../components/TvAndMovie'
import { useGetPopularTvQuery } from '../services/api'

const TvSeries = () => {
  const { data } = useGetPopularTvQuery()

  if (data) {
    const series = checkPopularTvItems(data.results)
    return (
      <div className="w-100 pt-24 px-8 flex flex-col select-none lg:w-full lg:items-start xl:ps-40 xl:pt-10">
        <div className="pt-8 min-w-full xl:ps-14 xl:pt-4">
          <h2 className="text-4xl font-bold text-center lg:text-start font-display">
            Séries do dia
          </h2>
          <div className="pt-9 lg:pt-10">
            {series.map((serie, i) => {
              if (i >= 0 && i <= 9) {
                return (
                  <TvAndMovieCard
                    key={serie.id}
                    id={serie.id}
                    title={serie.name}
                    overview={serie.overview}
                    poster_path={serie.poster_path}
                    backdrop_path={serie.backdrop_path}
                    vote_average={Math.round(serie.vote_average * 10)}
                    odd={i % 2 != 0}
                    link="series"
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

export default TvSeries

import { useParams } from 'react-router-dom'

import TvAndMovieInfos from '../components/InfosPage/TvAndMovieInfos'

import { useGetTvCreditsQuery, useGetTvQuery } from './../services/api'
import Loader from '../components/Loader'

const TvSeriesInfoPage = () => {
  const { id } = useParams()
  const { data } = useGetTvQuery(String(id))
  const { data: cast } = useGetTvCreditsQuery(String(id))

  if (data && cast) {
    return (
      <div className="h-full pt-24 flex flex-col font-display select-none lg:w-full  lg:items-start xl:pt-10 xl:ps-40">
        <TvAndMovieInfos
          backdrop_path={data.backdrop_path}
          genres={data.genres}
          original_language={data.original_language}
          original_title={data.original_name}
          overview={data.overview}
          poster_path={data.poster_path}
          release_date={data.first_air_date}
          runtime={data.episode_run_time[0]}
          status={data.status}
          tagline={data.tagline}
          title={data.name}
          vote_average={Math.round(data.vote_average * 10)}
          seasons={data.number_of_seasons}
          cast={cast.cast}
          id={data.id}
          type="series"
        />
      </div>
    )
  }
  return <Loader />
}

export default TvSeriesInfoPage

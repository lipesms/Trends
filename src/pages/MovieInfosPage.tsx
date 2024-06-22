import { useParams } from 'react-router-dom'

import TvAndMovieInfos from '../components/InfosPage/TvAndMovieInfos'

import { useGetMovieCreditsQuery, useGetMovieQuery } from './../services/api'
import Loader from '../components/Loader'

const MovieInfosPage = () => {
  const { id } = useParams()
  const { data } = useGetMovieQuery(String(id))
  const { data: credits } = useGetMovieCreditsQuery(String(id))

  if (data && credits) {
    return (
      <div className="h-full pt-24 flex flex-col font-display select-none xl:ps-40 xl:w-full  xl:items-start xl:pt-10">
        <TvAndMovieInfos
          backdrop_path={data.backdrop_path}
          budget={data.budget}
          genres={data.genres}
          original_language={data.original_language}
          original_title={data.original_title}
          overview={data.overview}
          poster_path={data.poster_path}
          release_date={data.release_date}
          revenue={data.revenue}
          runtime={data.runtime}
          status={data.status}
          tagline={data.tagline}
          title={data.title}
          vote_average={Math.round(data.vote_average * 10)}
          cast={credits.cast}
          id={data.id}
          type="films"
        />
      </div>
    )
  }
  return <Loader />
}

export default MovieInfosPage

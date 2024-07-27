import { useParams } from 'react-router-dom'

import FamousInfos from '../components/InfosPage/FamousInfos'

import {
  useGetFamousQuery,
  useGetFamousMoviesCreditsQuery,
  useGetFamousTvCreditsQuery
} from './../services/api'
import Loader from '../components/Loader'
import { ordFamousMoviesCredits, ordFamousTvCredits } from '../Utils'

const FamousInfosPage = () => {
  const { id } = useParams()
  const { data } = useGetFamousQuery(String(id))
  const { data: movieCredits } = useGetFamousMoviesCreditsQuery(String(id))
  const { data: tvCredits } = useGetFamousTvCreditsQuery(String(id))

  if (data && movieCredits && tvCredits) {
    const ordMovieCredits = ordFamousMoviesCredits(movieCredits.cast)
    const ordTvCredits = ordFamousTvCredits(tvCredits.cast)
    return (
      <div className="h-full pt-24 flex flex-col font-display select-none xl:ps-40 xl:w-full xl:items-start xl:pt-10">
        <FamousInfos
          biography={data.biography}
          birthday={data.birthday}
          deathday={data.deathday}
          name={data.name}
          place_of_birth={data.place_of_birth}
          profile_path={data.profile_path}
          moviesCast={ordMovieCredits}
          tvCast={ordTvCredits}
        />
      </div>
    )
  }
  return <Loader />
}

export default FamousInfosPage

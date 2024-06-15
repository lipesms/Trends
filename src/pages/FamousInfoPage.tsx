import { useParams } from 'react-router-dom'

import FamousInfos from '../components/InfosPage/FamousInfos'

import {
  useGetFamousQuery,
  useGetFamousMoviesCreditsQuery,
  useGetFamousTvCreditsQuery
} from './../services/api'
import Loader from '../components/Loader'

const FamousInfosPage = () => {
  const { id } = useParams()
  const { data } = useGetFamousQuery(String(id))
  const { data: movieCredits } = useGetFamousMoviesCreditsQuery(String(id))
  const { data: tvCredits } = useGetFamousTvCreditsQuery(String(id))

  if (data && movieCredits && tvCredits) {
    return (
      <div className="h-full pt-24 flex flex-col font-display select-none xl:ps-40 xl:w-full xl:items-start xl:pt-10">
        <FamousInfos
          biography={data.biography}
          birthday={data.birthday}
          deathday={data.deathday}
          name={data.name}
          place_of_birth={data.place_of_birth}
          profile_path={data.profile_path}
          moviesCast={movieCredits.cast}
          tvCast={tvCredits.cast}
        />
      </div>
    )
  }
  return <Loader />
}

export default FamousInfosPage

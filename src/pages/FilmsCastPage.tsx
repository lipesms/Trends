import { useParams } from 'react-router-dom'
import { useGetMovieCreditsQuery } from '../services/api'
import Loader from '../components/Loader'
import CastCard from '../components/CastCard'
import { checkPopularPersonCastItems } from '../Utils'

const FilmsCastPage = () => {
  const { id } = useParams()

  const { data } = useGetMovieCreditsQuery(String(id))
  if (data) {
    const cast = checkPopularPersonCastItems(data.cast)
    return (
      <div className="pt-24 px-8 flex flex-col font-display select-none lg:w-full lg:items-start xl:ps-40 xl:pt-10">
        <div className="w-full pt-8 xl:ps-14 xl:pt-0">
          <h2 className="w-full text-start select-none text-2xl font-bold text-black pb-6 font-display lg:text-3xl ">
            Elenco
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {cast.map((actor) => {
              return (
                <CastCard
                  id={actor.id}
                  link="famous"
                  profile_path={actor.profile_path}
                  character={actor.character}
                  key={actor.id}
                  name={actor.name}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
  return <Loader />
}

export default FilmsCastPage

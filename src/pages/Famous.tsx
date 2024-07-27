import { checkPopularPersonItems, ordPopularFamous } from '../Utils'
import FamousList from '../components/FamousList'
import Loader from '../components/Loader'
import { useGetPopularPersonQuery } from '../services/api'

const Famous = () => {
  const { data } = useGetPopularPersonQuery()

  if (data) {
    const famous = checkPopularPersonItems(data.results)
    const ordFamous = ordPopularFamous(famous)
    return (
      <div className="w-100 pt-24 px-8 flex flex-col select-none lg:w-full lg:items-start xl:ps-40 xl:pt-10">
        <div className="pt-8 min-w-full xl:ps-14 xl:pt-4">
          <h2 className="text-4xl font-bold text-center lg:text-start font-display">
            Famosos do momento
          </h2>
          <div className="pt-9 lg:pt-10">
            {ordFamous.map((person, i) => {
              if (i <= 9) {
                return (
                  <FamousList
                    key={person.id}
                    id={person.id}
                    original_name={person.original_name}
                    know_for={person.known_for ? person.known_for : []}
                    profile_path={person.profile_path}
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
  return <Loader />
}

export default Famous

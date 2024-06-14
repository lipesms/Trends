import FamousList from '../components/FamousList'
import { useGetPopularPersonQuery } from '../services/api'

const Famous = () => {
  const { data: famous } = useGetPopularPersonQuery()

  if (famous) {
    return (
      <div className="w-100 pt-24 px-8 flex flex-col lg:ps-40 lg:w-full lg:items-start lg:pt-10">
        <div className="pt-8 lg:ps-14 lg:pt-4 min-w-full">
          <h2 className="text-4xl font-bold text-center lg:text-start font-display">
            Filmes em destaque hoje!
          </h2>
          <div className="pt-9 lg:pt-10">
            {famous.results.map((person, i) => {
              if (i >= 0 && i <= 9) {
                return (
                  <FamousList
                    key={person.id}
                    id={person.id}
                    original_name={person.original_name}
                    know_for={person.known_for}
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
}

export default Famous

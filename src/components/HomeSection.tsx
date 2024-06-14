import HomeCard from './HomeCard'
import { ResultMovies, ResultTv, ResultPerson } from '../services/api'

type Props = {
  title: string
  dados: ResultMovies[] | ResultTv[] | ResultPerson[]
  type?: 'person' | 'tvAndMovie'
  link: string
}

const HomeSection = ({ title, dados, link, type = 'tvAndMovie' }: Props) => {
  if (!dados) {
    return <h3>Carregando...</h3>
  } else {
    return (
      <section className="relative w-90 pt-4 pb-8 flex flex-col items-center lg:w-full lg:items-start md:pt-10 lg:ps-14 lg:h-fit lg:pe-7">
        <h2 className="w-full text-start select-none text-2xl font-bold text-black pb-6 font-display lg:text-3xl ">
          {title}
        </h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-9 ">
          {dados.map((s, i) => {
            if (i <= 5) {
              return (
                <HomeCard
                  type={type}
                  key={i}
                  id={s.id}
                  titulo={s.name ? s.name : ''}
                  image={s.poster_path ? s.poster_path : s.profile_path}
                  link={link}
                />
              )
            }
          })}
        </div>
        <a
          href={link}
          className="w-full text-start text-stone-600 hover:text-black transition easy-out text-xl font-display mt-6 sm:self-start lg:self-auto"
        >
          Ver mais →
        </a>
      </section>
    )
  }
}

export default HomeSection

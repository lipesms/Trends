import Carousel from '../Carouseul'
import Card from '../Card'
import { ResultMovies } from '../../services/api'

type Props = {
  title: string
  dados: ResultMovies[]
}

const MovieSection = ({ title, dados }: Props) => {
  if (!dados) {
    return <h3>Carregando...</h3>
  } else {
    return (
      <section className="relative w-90 pt-4 pb-8 flex flex-col items-center lg:w-full lg:items-start lg:pt-10 lg:ps-14 lg:h-fit lg:pe-7">
        <h2 className="select-none text-2xl font-bold text-white pb-4 ps-8 font-display drop-shadow-3xl lg:text-3xl lg:pb-9">
          {title}
        </h2>
        <Carousel className="sm:hidden" slides={dados} />
        <div className="hidden w-full sm:grid sm:grid-cols-2 md:grid-cols-3 px-8 xl:grid-cols-5 gap-10 ">
          {dados.map((s, i) => {
            if (i > 0 && i <= 10) {
              return (
                <Card
                  key={i}
                  titulo={s.title}
                  image={s.poster_path}
                  critica={s.vote_average}
                  sinopse={s.overview}
                />
              )
            }
          })}
        </div>
        <a
          href="#"
          className="text-gray-500 hover:text-white transition easy-out text-xl font-display mt-6 sm:self-start px-8 lg:self-auto "
        >
          Ver mais →
        </a>
      </section>
    )
  }
}

export default MovieSection

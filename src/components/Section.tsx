import Carousel from './Carouseul'
import Card from './Card'

export type slidesFilmes = {
  titulo: string
  image: string
  genero: string[]
  duracao: string
  faixaEtaria: string
  lancamento: string
  sinopse: string
}
type Props = {
  title: string
  slides: slidesFilmes[]
}

const Section = ({ title, slides }: Props) => {
  return (
    <section className="relative w-90 pt-4 pb-8 flex flex-col items-center lg:w-full lg:items-start lg:pt-10 lg:ps-14 lg:h-fit lg:pe-7">
      <h2 className="select-none text-2xl font-bold text-white pb-4 ps-8 font-display drop-shadow-3xl lg:text-3xl lg:pb-9">
        {title}
      </h2>
      <Carousel className="sm:hidden" slides={slides} />
      <div className="hidden w-full sm:grid sm:grid-cols-2 md:grid-cols-3 px-8 xl:grid-cols-5 gap-10 ">
        {slides.map((s, i) => (
          <Card
            key={i}
            titulo={s.titulo}
            image={s.image}
            genero={s.genero}
            faixaEtaria={s.faixaEtaria}
            duracao={s.duracao}
            lancamento={s.lancamento}
            sinopse={s.sinopse}
          />
        ))}
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

export default Section

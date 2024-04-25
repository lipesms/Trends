import Carousel from './Carouseul'

type Props = {
  title: string
  slides: string[]
}

const Section = ({ title, slides }: Props) => {
  return (
    <section className="bg-body-pattern w-90 pt-4 pb-8 flex flex-col items-center lg:w-full lg:items-start lg:pt-10 lg:ps-14 lg:h-fit lg:pe-7">
      <h2 className="text-2xl font-bold text-white pb-4 ps-8 font-display drop-shadow-3xl lg:text-3xl lg:pb-9">
        {title}
      </h2>
      <Carousel className="sm:hidden" slides={slides} />
      <div className="hidden w-full sm:grid sm:grid-cols-2 md:grid-cols-3 px-8 lg:grid-cols-5 gap-10 ">
        {slides.map((s, i) => (
          <a key={`image ${i}`} href="#" className="relative">
            <img src={s} alt="" className="rounded-2xl w-full h-full " />

            {/* Overlay do hover */}
            <div
              className={`opacity-0 hover:opacity-100 transition easy-out duration-300 overflow-hidden absolute top-0 left-0 flex flex-col gap-8 justify-between py-4 h-full w-full bg-hover-card-black rounded-2xl px-6 cursor-pointer`}
            >
              <div>
                <h2 className="font-display font-bold text-white text-center text-xl pb-4 2xl:text-xl">
                  Pobres criaturas
                </h2>
                <div className="flex flex-wrap justify-between pb-2">
                  <span className="font-display text-white md:hidden 2xl:block text-xs">
                    Ficção científica, Roma...
                  </span>
                  <span className="text-white justify-between md:hidden 2xl:block text-xs">
                    2h 21m
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-display text-white border px-1 md:hidden 2xl:block text-xs">
                    18
                  </span>
                  <span className="font-display text-white md:hidden 2xl:block text-xs">
                    08-12-2023 (BR)
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-white text-lg mb-4 md:hidden 2xl:block">
                  Sinopse
                </h3>
                <p className="font-display text-white md:hidden 2xl:block text-xs">
                  A fantástica evolução de Bella Baxter, uma mulher ressuscitada
                  pelo brilhante e heterodoxo médico Godwin Baxter. Sob a
                  protecção de Baxter, Bella quer aprender. Sedenta por conhecer
                  o mundo, foge com Duncan Wedderburn, um advogado elegante e
                  debochado, numa aventura vertiginosa. Livre dos preconceitos
                  do seu tempo, Bella cresce firme no propósito de defender a
                  igualdade e a libertação.
                </p>
              </div>
            </div>
          </a>
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

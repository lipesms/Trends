import { slidesFilmes } from '../components/Section'

const Card = ({
  titulo,
  image,
  genero,
  duracao,
  faixaEtaria,
  lancamento,
  sinopse
}: slidesFilmes) => {
  const formatSinopse = (text: string) => {
    if (text.length > 146) {
      return text.slice(0, 143).concat('...')
    }
    return text
  }

  const formatGenero = (genero: string[]) => {
    const generoStr = genero.join(' ')
    if (generoStr.length > 21) {
      return generoStr.slice(0, 21).concat('...')
    }
    return generoStr
  }

  return (
    <div className="relative select-none">
      <img src={image} alt="" className="rounded-2xl w-full h-full " />

      {/* Overlay do hover */}
      <div
        className={` opacity-0 hover:opacity-100 transition easy-out duration-300 overflow-hidden absolute top-0 left-0 flex flex-col justify-between py-4 h-full w-full bg-hover-card-black rounded-2xl px-6`}
      >
        <div>
          <h2 className="font-display font-bold text-white text-center text-xl pb-4 2xl:text-xl">
            {titulo}
          </h2>
          <div className="flex flex-wrap justify-between pb-2">
            <span className="font-display text-white md:hidden 2xl:block text-xs">
              {formatGenero(genero)}
            </span>
            <span className="text-white justify-between md:hidden 2xl:block text-xs">
              {duracao}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-display text-white border px-1 md:hidden 2xl:block text-xs">
              {faixaEtaria}
            </span>
            <span className="font-display text-white md:hidden 2xl:block text-xs">
              {lancamento}
            </span>
          </div>
        </div>
        <div>
          <h3 className="font-display text-white text-lg mb-4 md:hidden 2xl:block">
            Sinopse
          </h3>
          <p className="font-display text-white md:hidden 2xl:block text-xs">
            {sinopse ? formatSinopse(sinopse) : 'Em breve'}
          </p>
          <a className="text-white rounded-3xl bg-cyan-600 px-4 py-2 block w-full text-center mt-4 cursor-pointer">
            Saiba mais
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card

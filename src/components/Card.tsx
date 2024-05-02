import { useEffect, useState } from 'react'

export type slidesFilmes = {
  titulo?: string
  image: string
  sinopse?: string
  critica?: number
}

const Card = ({ titulo, image, critica, sinopse }: slidesFilmes) => {
  const [img, setImg] = useState('')
  useEffect(() => {
    if (image) {
      fetch(`https://image.tmdb.org/t/p/w500${image}`).then((resp) =>
        setImg(resp.url)
      )
    } else {
      setImg('https://image.tmdb.org/t/p/w500/e8pI4XkYgUMuSJ8cEFbJE18wc4e.jpg')
    }
  }, [image])

  const formatSinopse = (text: string) => {
    if (text.length > 146) {
      return text.slice(0, 143).concat('...')
    }
    return text
  }

  return (
    <div className="h-90 min-w-90 sm:h-auto sm:min-w-full md:relative select-none">
      <img src={img} alt="" className="rounded-2xl  w-full h-full " />

      {/* Overlay do hover */}
      <div
        className={`hidden opacity-0 hover:opacity-100 transition easy-out duration-300 overflow-hidden absolute top-0 left-0  flex-col justify-between py-4 h-full w-full bg-hover-card-black rounded-2xl px-6 md:flex`}
      >
        <div>
          <h2 className="font-display font-bold text-white text-center text-xl pb-4 2xl:text-xl">
            {titulo}
          </h2>
          <div
            className={`flex justify-between items-center ${critica ? 'block' : 'hidden'}`}
          >
            <span className="font-display text-white md:hidden 2xl:block">
              {`${critica ? 'Popularidade' : ''}`}
            </span>
            <span className="font-display text-white border rounded-full p-2.5 md:hidden 2xl:block ">
              {critica ? critica.toFixed(1) : ''}
            </span>
          </div>
        </div>
        <div>
          <h3 className="font-display text-white text-lg mb-4 md:hidden 2xl:block">
            {`${sinopse ? 'sinopse' : ''}`}
          </h3>
          <p className="font-display text-white md:hidden 2xl:block text-xs">
            {sinopse ? formatSinopse(sinopse) : ''}
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

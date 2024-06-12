import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export type CardItems = {
  titulo?: string
  image?: string
  id: number
  type?: 'person' | 'tvAndMovie'
}

const Card = ({ titulo, image, type = 'tvAndMovie', id }: CardItems) => {
  const [img, setImg] = useState('')

  useEffect(() => {
    if (image) {
      fetch(`https://image.tmdb.org/t/p/w500${image}`).then((resp) =>
        setImg(resp.url)
      )
    } else {
      fetch('https://placehold.co/280x500').then((resp) => setImg(resp.url))
    }
  }, [image])

  // const formatSinopse = (text: string) => {
  //   if (text.length > 146) {
  //     return text.slice(0, 143).concat('...')
  //   }
  //   return text
  // }

  // const formatTitle = (title: string) => {
  //   if (title.length > 13) {
  //     return title.slice(0, 13).concat('...')
  //   }
  //   return title
  // }

  return (
    <Link
      to={`/infos/${id}`}
      className="relative max-w-50 sm:h-auto sm:min-w-full relative select-none drop-shadow-xl hover:drop-shadow-2xl "
    >
      <img src={img} alt="" className="rounded-2xl  w-full h-full " />
      {type === 'person' ? (
        <div className="absolute bottom-0 left-0 py-4 w-full h-1/4 bg-card-person-name">
          <p className="text-center text-lg font-bold text-white">{titulo}</p>
        </div>
      ) : (
        <></>
      )}

      {/* Overlay do hover
      <div
        className={`hidden opacity-0 hover:opacity-100 transition easy-out duration-300 overflow-hidden absolute top-0 left-0 flex-col justify-between py-4 h-full w-full bg-hover-card-black rounded-2xl px-6 md:flex`}
      >
        <div>
          <h2 className="font-display font-bold text-white text-center text-xl pb-4 2xl:text-xl">
            {titulo ? formatTitle(titulo) : ''}
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
      </div> */}
    </Link>
  )
}

export default Card

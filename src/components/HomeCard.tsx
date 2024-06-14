import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import placeholder from '../assets/images/placeholder_image.png'

export type CardItems = {
  titulo?: string
  image?: string
  id: number
  type?: 'person' | 'tvAndMovie'
  link: string
}

const HomeCard = ({
  titulo,
  image,
  type = 'tvAndMovie',
  id,
  link
}: CardItems) => {
  const [img, setImg] = useState('')

  useEffect(() => {
    if (image) {
      fetch(`https://image.tmdb.org/t/p/w500${image}`).then((resp) =>
        setImg(resp.url)
      )
    } else {
      setImg(placeholder)
    }
  }, [image])

  return (
    <Link
      to={`/films/${id}`}
      className="relative max-w-50 sm:h-auto sm:min-w-full relative select-none drop-shadow-xl hover:drop-shadow-2xl "
    >
      <img src={img} alt="" className="rounded-2xl  w-full" />
      {type === 'person' ? (
        <div className="absolute bottom-0 left-0 py-4 w-full  bg-card-person-name rounded-b-2xl">
          <p className="text-center text-lg font-bold text-white">{titulo}</p>
        </div>
      ) : (
        <></>
      )}
    </Link>
  )
}

export default HomeCard

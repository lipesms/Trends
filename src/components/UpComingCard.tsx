import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type CardProps = {
  id: number
  image: string
  title: string
}

const UpComingCard = ({ id, image, title }: CardProps) => {
  const [img, setImg] = useState('')

  useEffect(() => {
    fetch(`https://image.tmdb.org/t/p/w500${image}`).then((resp) =>
      setImg(resp.url)
    )
  }, [image])

  useEffect
  return (
    <Link
      to={`/films/${id}`}
      className="relative w-full relative select-none  drop-shadow-xl hover:scale-105 transition-scale duration-150"
    >
      <img className="rounded-2xl" src={img} alt="" />
      <span className="flex justify-center pt-4 font-jockey text-white ">
        <p className="text-center">{title}</p>
      </span>
    </Link>
  )
}

export default UpComingCard

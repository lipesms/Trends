import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type CastCardProps = {
  id: number
  profile_path: string
  name: string
  character: string
}

const CastCard = ({ id, profile_path, name, character }: CastCardProps) => {
  const [image, setImage] = useState('')

  useEffect(() => {
    if (profile_path) {
      fetch(`https://image.tmdb.org/t/p/w500${profile_path}`).then((resp) =>
        setImage(resp.url)
      )
    }
  }, [profile_path])
  return (
    <Link to={`/famous/${id}`} className="relative max-w-32  xl:max-w-48">
      <img src={image} alt="" className="rounded-t-xl w-full max-h-50" />
      <div className="flex flex-col justify-around text-xs absolute bottom-0 left-0 py-1 w-full min-h-16 bg-card-person-name xl:text-sm">
        <p className="text-center font-bold text-white">{name}</p>
        <p className="text-center font-bold pt-2 text-white">{character}</p>
      </div>
    </Link>
  )
}

export default CastCard

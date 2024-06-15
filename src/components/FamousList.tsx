import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { KnowFor } from '../services/api'

import placeholder from '../assets/images/placeholder_person.png'

type FamousProps = {
  profile_path: string
  original_name: string
  know_for: KnowFor[]
  id: number
  odd: boolean
}

const FamousList = ({
  profile_path,
  original_name,
  know_for,
  id,
  odd
}: FamousProps) => {
  const [img, setImg] = useState('')
  const [backdrop, setBackdrop] = useState('')

  useEffect(() => {
    if (profile_path) {
      fetch(`https://image.tmdb.org/t/p/w500${profile_path}`).then((resp) =>
        setImg(resp.url)
      )
    } else {
      setImg(placeholder)
    }
  }, [profile_path])

  useEffect(() => {
    if (know_for[0].backdrop_path) {
      fetch(
        `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${know_for[0].backdrop_path}`
      ).then((resp) => setBackdrop(resp.url))
    } else {
      fetch('https://placehold.co/1920x800').then((resp) =>
        setBackdrop(resp.url)
      )
    }
  }, [know_for])

  const formatKnowFor = (knowFor: KnowFor[]) => {
    return knowFor.map((movie) =>
      movie.original_title ? movie.original_title : movie.name
    )
  }

  return (
    <>
      <Link
        to={`/famous/${id}`}
        className={`z-10 relative flex justify-between w-full font-jockey bg-white ${odd ? 'rounded-ss-2xl ' : 'rounded-es-2xl rounded-se-2xl'} mb-8 lg:gap-8 lg:p-8 lg:rounded-2xl`}
      >
        <div
          className={`max-w-40 min-w-40 lg:max-w-xs lg:min-w-80 ${odd ? 'order-2' : ''} lg:order-first`}
        >
          <img
            src={img}
            alt=""
            className={` ${odd ? 'rounded-ee-2xl' : 'rounded-es-2xl'}  lg:rounded-2xl w-full`}
          />
        </div>
        <div className="flex flex-col justify-between grow p-2 justify-between">
          <h3 className="text-xl font-bold lg:text-white lg:text-4xl ">
            {original_name}
          </h3>
          <div>
            <h4 className="text-xl lg:text-white lg:text-3xl pt-3 pb-6 ">
              Conhecido por:
            </h4>
            <span className="lg:text-white lg:text-2xl ">
              <ul>
                {formatKnowFor(know_for).map((media) => (
                  <li key={media}>{media}</li>
                ))}
              </ul>
            </span>
          </div>
        </div>
        <div className="hidden -z-9 w-full h-full absolute top-0 left-0 bg-hover-card-black rounded-3xl lg:block"></div>
        <img
          src={backdrop}
          className="hidden -z-10 w-full h-full absolute top-0 left-0 bg-body object-cover rounded-3xl lg:block"
        ></img>
      </Link>
    </>
  )
}

export default FamousList

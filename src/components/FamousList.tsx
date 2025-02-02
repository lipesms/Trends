import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import placeholder from '../assets/images/placeholder_person.png'
import { useGetFamousMoviesCreditsQuery } from '../services/api'

type FamousProps = {
  profile_path: string
  original_name: string
  id: number
  odd: boolean
}

const FamousList = ({
  profile_path,
  original_name,
  id,
  odd
}: FamousProps) => {
  const [img, setImg] = useState('')
  const [backdrop, setBackdrop] = useState('')
  const {data} = useGetFamousMoviesCreditsQuery(id.toString())
  
  useEffect(() => {
    console.log(data?.cast)
    const tamanho = data?.cast.length
    if(tamanho && data){
      for(let i = 0; i < tamanho; i++){
        if (data?.cast[i].backdrop_path != null){
          fetch(`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data?.cast[i].backdrop_path}`)
            .then((resp) => setBackdrop(resp.url))
            break
        }
      }
    }    
  }, [data])

  useEffect(() => {
    if (profile_path) {
      fetch(`https://image.tmdb.org/t/p/w500${profile_path}`).then((resp) =>
        setImg(resp.url)
      )
    } else {
      setImg(placeholder)
    }
  }, [profile_path])

  const formatKnowFor = (movieCast: MoviesCast[]) => {
    return movieCast.map((movie) =>
      movie.title ? movie.title : movie.original_title
    )
  }
  if(backdrop){
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
                {formatKnowFor(data?.cast ? data.cast : []).map((media, i) => {
                  if(i < 3){
                    return (<li key={media}>{media}</li>)
                  }
                })}
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
}

export default FamousList

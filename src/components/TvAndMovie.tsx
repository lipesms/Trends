import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { setVoteAverageColor } from '../Utils'

type propsTvAndMovieCard = {
  poster_path: string
  title?: string
  name?: string
  overview: string
  backdrop_path: string
  vote_average: number
  id: number
  odd: boolean
  link: string
}

const TvAndMovieCard = ({
  poster_path,
  title,
  name,
  overview,
  vote_average,
  id,
  backdrop_path,
  odd,
  link
}: propsTvAndMovieCard) => {
  const [img, setImg] = useState('')
  const [backdrop, setBackdrop] = useState('')

  useEffect(() => {
    if (poster_path) {
      fetch(`https://image.tmdb.org/t/p/w500${poster_path}`).then((resp) =>
        setImg(resp.url)
      )
    } else {
      fetch('https://placehold.co/280x500').then((resp) => setImg(resp.url))
    }
  }, [poster_path])
  useEffect(() => {
    if (backdrop_path) {
      fetch(
        `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}`
      ).then((resp) => setBackdrop(resp.url))
    } else {
      fetch('https://placehold.co/1920x800').then((resp) =>
        setBackdrop(resp.url)
      )
    }
  }, [backdrop_path])

  const formatSinopse = (text: string, width: 'small' | 'medium' | 'large') => {
    switch (width) {
      case 'small':
        if (text.length > 70) {
          return text.slice(0, 65).concat('...')
        }
        return text
      case 'medium':
        if (text.length > 250) {
          return text.slice(0, 250).concat('...')
        }
        return text
      case 'large':
        if (text.length > 500) {
          return text.slice(0, 500).concat('...')
        }
        return text
    }
  }

  return (
    <>
      <Link
        to={`/${link}/${id}`}
        className={`z-10 relative flex w-full font-jockey bg-white ${odd ? 'rounded-ss-2xl ' : 'rounded-es-2xl rounded-se-2xl'} mb-8 lg:gap-8 lg:p-8 lg:rounded-2xl `}
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
        <div className="flex flex-col p-2 justify-between">
          <h3 className="text-xl font-bold lg:text-white lg:text-4xl ">
            {title ? title : name}
          </h3>
          <div>
            <h4 className="text-xl lg:text-white lg:text-3xl pt-3 pb-6 ">
              Sinopse
            </h4>
            <span className="lg:text-white lg:text-2xl ">
              <>
                <p className="md:hidden">{formatSinopse(overview, 'small')}</p>
                <p className="hidden md:block lg:hidden">
                  {formatSinopse(overview, 'medium')}
                </p>
                <p className="hidden md:hidden lg:block">
                  {formatSinopse(overview, 'large')}
                </p>
              </>
            </span>
          </div>
        </div>
        <span className="hidden absolute -top-4 right-4 lg:top-4 lg:right-8 gap-4 justify-center pt-6 font-bold lg:justify-start lg:pt-4 lg:flex">
          <p
            className={`text-xl border-2 ${setVoteAverageColor(vote_average)} py-4 px-2 rounded-full font-bold lg:text-white lg:text-lg lg:py-3`}
          >
            {`${vote_average}%`}
          </p>
        </span>
        <div className="hidden -z-9 w-full h-full absolute top-0 left-0 bg-hover-card-black rounded-3xl lg:block"></div>
        <img
          src={backdrop}
          className="hidden -z-10 w-full h-full absolute top-0 left-0 bg-body object-cover rounded-3xl lg:block"
        ></img>
      </Link>
    </>
  )
}

export default TvAndMovieCard

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type propsFilmsCard = {
  poster_path: string
  title: string
  overview: string
  backdrop_path: string
  id: number
  odd: boolean
}

const FilmsCard = ({
  poster_path,
  title,
  overview,
  id,
  backdrop_path,
  odd
}: propsFilmsCard) => {
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
        if (text.length > 129) {
          return text.slice(0, 129).concat('...')
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
      <div
        className={`z-10 relative flex w-full font-jockey bg-white ${odd ? 'rounded-ss-2xl ' : 'rounded-es-2xl rounded-se-2xl'} mb-8 lg:gap-8 lg:p-8 lg:rounded-2xl`}
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
        <Link to={'/'} className="flex flex-col p-2 justify-between">
          <h3 className="text-xl font-bold lg:text-white lg:text-4xl ">
            {title}
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
        </Link>
        <span className="hidden absolute -top-4 right-4 lg:top-4 lg:right-8 gap-4 justify-center pt-6 font-bold lg:justify-start lg:pt-4 lg:flex">
          <p className="text-xl border-2 border-green-500 py-4 px-2 rounded-full font-bold lg:text-white lg:text-lg lg:py-3">
            83%
          </p>
        </span>
        <div className="hidden -z-9 w-full h-full absolute top-0 left-0 bg-hover-card-black rounded-3xl lg:block"></div>
        <img
          src={backdrop}
          className="hidden -z-10 w-full h-full absolute top-0 left-0 bg-body object-cover rounded-3xl lg:block"
        ></img>
      </div>
    </>
  )
}

export default FilmsCard

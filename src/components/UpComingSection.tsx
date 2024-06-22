import { useEffect, useState } from 'react'
import { useGetUpComingMoviesQuery } from '../services/api'
import Loader from './Loader'
import UpComingCard from './UpComingCard'

type UpComingProps = {
  title: string
}

const UpComingSection = ({ title }: UpComingProps) => {
  const [background, setBackground] = useState('')
  const { data } = useGetUpComingMoviesQuery()

  useEffect(() => {
    if (data) {
      fetch(
        `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data.results[0].backdrop_path}`
      ).then((resp) => setBackground(resp.url))
    } else {
      setBackground(
        'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/fDmci71SMkfZM8RnCuXJVDPaSdE.jpg'
      )
    }
  }, [data])
  console.log(data)
  if (data) {
    return (
      <section className="w-90 pt-4 pb-8 flex flex-col items-center drop-shadow-xl lg:items-start md:pt-10 lg:h-fit xl:pe-8 xl:ps-14 xl:min-w-full">
        <div className="overflow-hidden relative z-10 p-6 pb-12 h-full rounded-3xl xl:min-h-72 xl:min-w-full">
          <h2 className="w-full text-white select-none text-2xl font-bold text-black pb-6 font-display drop-shadow-2xl lg:text-3xl ">
            {title}
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {data.results.map((movie, i) => {
              if (i < 4) {
                return (
                  <UpComingCard
                    key={movie.id}
                    id={movie.id}
                    image={movie.backdrop_path}
                    title={movie.title}
                  />
                )
              }
            })}
          </div>
          <img
            className="absolute top-0 right-0 -z-9 sepia brightness-50 w-full h-full lg:h-fit object-cover"
            src={background}
            alt=""
          />
        </div>
      </section>
    )
  }
  return <Loader />
}

export default UpComingSection

import { useEffect, useState } from 'react'

import personPlaceholder from '../../assets/images/placeholder_person.png'
import CastCard from '../CastCard'
import {
  checkPopularMovieItems,
  checkPopularTvCastItems,
  removeDuplicatedSeries
} from '../../Utils'

type FamousInfoProps = {
  profile_path: string
  backdrop_path?: string
  name: string
  biography: string
  birthday: string
  place_of_birth: string
  deathday: string
  moviesCast: MoviesCast[]
  tvCast: TvCast[]
}

const FamousInfos = ({
  profile_path,
  backdrop_path = '/uw4SnKFZ453Gxmj5XR5Susj8TNo.jpg',
  name,
  biography,
  birthday,
  place_of_birth,
  deathday,
  moviesCast,
  tvCast
}: FamousInfoProps) => {
  const [image, setImage] = useState('')
  const [backdrop, setBackdrop] = useState('')
  const movies = checkPopularMovieItems(moviesCast)
  const seriesData = checkPopularTvCastItems(tvCast)
  const series = removeDuplicatedSeries(seriesData)

  console.log(series)

  useEffect(() => {
    if (profile_path) {
      fetch(`https://image.tmdb.org/t/p/w500${profile_path}`).then((resp) =>
        setImage(resp.url)
      )
    } else {
      setImage(personPlaceholder)
    }
  }, [profile_path])

  useEffect(() => {
    if (backdrop_path) {
      fetch(
        `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${moviesCast[0].backdrop_path}`
      ).then((resp) => setBackdrop(resp.url))
    }
  }, [backdrop_path, moviesCast])

  return (
    <div className="w-full h-full xl:px-8">
      <div className="relative w-full h-full xl:p-8 xl:flex xl:text-white">
        <div className="w-full p-6 flex justify-center xl:justify-start xl:p-0 xl:w-fit ">
          <img
            src={image}
            alt=""
            className="max-h-60 h-full xl:min-w-82 xl:max-w-96 xl:w-full xl:max-h-520 xl:rounded-2xl"
          />
        </div>
        <div className="flex flex-col pt-4 px-8">
          <h2 className="text-4xl font-bold text-center self-center xl:self-start">
            {name}
          </h2>
          <div className="pt-8 text-xl lg:order-2">
            <h4 className="text-2xl pt-4">Biografia</h4>
            <p className="pt-4">
              {biography != '' ? biography : 'Não informado'}
            </p>
          </div>
          <section className="flex flex-wrap self-center justify-between mt-10 p-4 bg-white rounded-2xl gap-8 lg:order-1 xl:bg-movie-infos xl:self-start">
            <span>
              <h6 className="text-center">Nascimento</h6>
              <p className="text-center">{place_of_birth}</p>
            </span>
            <span className="flex flex-col inline-block">
              <h6 className="text-center">Aniversário</h6>
              <p className="text-center">{birthday}</p>
            </span>
            {deathday ? (
              <span>
                <h6 className="text-center">Falecimento</h6>
                <p className="text-center">{deathday}</p>
              </span>
            ) : (
              <></>
            )}
          </section>
        </div>
        <img
          src={backdrop}
          alt=""
          className="-z-9 w-full max-h-72 h-full absolute top-0 left-0 bg-body object-cover xl:rounded-3xl xl:block xl:max-h-none"
        />
        <div className="-z-9 w-full max-h-72 h-full absolute top-0 left-0 bg-hover-card-black xl:rounded-3xl xl:block xl:max-h-none"></div>
      </div>
      <div className="pt-8 px-8 xl:px-0">
        <h3 className="text-2xl font-bold pb-4">Principais filmes</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 justify-between md:justify-start lg:px-0">
          {movies.map((movie, i) => {
            if (i < 7) {
              return (
                <CastCard
                  id={movie.id}
                  profile_path={movie.poster_path}
                  key={movie.id}
                  link="films"
                />
              )
            }
          })}
        </div>
      </div>
      {tvCast[0] ? (
        <div className="pt-8 px-8 xl:px-0">
          <h3 className="text-2xl font-bold pb-4">Principais séries</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 justify-between md:justify-start lg:px-0">
            {series.map((Serie, i) => {
              if (i < 7) {
                return (
                  <CastCard
                    id={Serie.id}
                    profile_path={Serie.poster_path}
                    key={Serie.id}
                    link="series"
                  />
                )
              }
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default FamousInfos

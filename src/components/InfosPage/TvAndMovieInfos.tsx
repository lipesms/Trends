import { Link } from 'react-router-dom'

import { Cast, genre } from '../../services/api'
import { useEffect, useState } from 'react'
import CastCard from '../CastCard'

type TvAndMovieInfosProps = {
  poster_path: string
  backdrop_path: string
  genres: genre[]
  runtime: number
  title: string
  release_date: string
  vote_average: number
  tagline: string
  overview: string
  original_title: string
  status: string
  original_language: string
  revenue?: number
  budget?: number
  seasons?: number
  cast: Cast[]
}

const TvAndMovieInfos = ({
  poster_path,
  backdrop_path,
  genres,
  runtime,
  title,
  release_date,
  vote_average,
  tagline,
  overview,
  original_title,
  status,
  original_language,
  revenue,
  budget,
  seasons,
  cast
}: TvAndMovieInfosProps) => {
  const [image, setImage] = useState('')
  const [backdrop, setBackdrop] = useState('')

  useEffect(() => {
    if (poster_path) {
      fetch(`https://image.tmdb.org/t/p/w500${poster_path}`).then((resp) =>
        setImage(resp.url)
      )
    }
  }, [poster_path])
  useEffect(() => {
    if (backdrop_path) {
      fetch(
        `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}`
      ).then((resp) => setBackdrop(resp.url))
    }
  }, [backdrop_path])

  const formatGenres = (genres: genre[]) => {
    const genresNames = genres.map((genre) => genre.name)
    const firstsGenres = genresNames.slice(0, 2)
    return firstsGenres.join(', ')
  }

  const formatRuntime = (runtime: number) => {
    const hours = Math.floor(runtime / 60)
    const minutes = runtime % 60

    return `${hours}h ${minutes}m`
  }

  return (
    <div className="w-full h-full xl:px-8 ">
      <div className="relative w-full h-full xl:p-8 xl:flex xl:text-white">
        <div className="w-full p-6 flex justify-center xl:justify-start xl:p-0 xl:w-fit ">
          <img
            src={image}
            alt=""
            className="max-h-60 h-full xl:min-w-82 xl:max-w-96 xl:w-full xl:max-h-520 xl:rounded-2xl"
          />
        </div>
        <div className="font-jockey flex flex-col items-center pt-4 px-8 xl:items-start">
          <h2 className="text-4xl">{title}</h2>
          <p className="hidden xl:block pt-4">
            {release_date} (br) - {formatGenres(genres)} -{' '}
            {runtime ? formatRuntime(runtime) : ''}
          </p>
          <div className="flex items-center text-2xl pt-8 gap-6">
            <span className="border-2 border-emerald-600 rounded-full p-4 xl:py-3 xl:px-2">
              {Math.round(vote_average * 10)}%
            </span>
            <p className="h-fit">Classificação dos usuários</p>
          </div>
          <div className="pt-8 text-xl xl:order-2">
            <p className="text-center text-gray-600 xl:text-start xl:text-slate-300">
              {tagline}
            </p>
            <h4 className="text-2xl pt-4">Sinopse</h4>
            <p className="pt-4">
              {overview != '' ? overview : 'Não informado'}
            </p>
          </div>
          <section className="flex flex-wrap justify-between mt-10 p-4 bg-white rounded-2xl gap-8 xl:order-1 xl:max-w-50 xl:bg-movie-infos">
            <span className="flex flex-col inline-block">
              <h6 className="text-center">Titulo original</h6>
              <p className="text-center">{original_title}</p>
            </span>
            <span>
              <h6 className="text-center">Estado</h6>
              <p className="text-center">{status}</p>
            </span>
            <span>
              <h6 className="text-center">Idioma original</h6>
              <p className="text-center">{original_language}</p>
            </span>
            <span className="xl:hidden">
              <h6 className="text-center">Lançamento</h6>
              <p className="text-center">{release_date}</p>
            </span>
            <span className="xl:hidden">
              <h6 className="text-center">Gênero</h6>
              <p className="text-center">{formatGenres(genres)}</p>
            </span>
            {revenue ? (
              <span>
                <h6 className="text-center">Faturamento</h6>
                <p className="text-center">
                  {' '}
                  {revenue != 0
                    ? `U$ ${new Intl.NumberFormat().format(revenue)}`
                    : 'Não informado'}
                </p>
              </span>
            ) : (
              <></>
            )}
            {budget ? (
              <span>
                <h6 className="text-center">Orçamento</h6>
                <p className="text-center">
                  {budget != 0
                    ? `U$ ${new Intl.NumberFormat().format(budget)}`
                    : 'Não informado'}
                </p>
              </span>
            ) : (
              <></>
            )}
            {seasons ? (
              <span>
                <h6 className="text-center">Temporadas</h6>
                <p className="text-center">{seasons}</p>
              </span>
            ) : (
              <></>
            )}
            {runtime ? (
              <span className="xl:hidden">
                <h6 className="text-center">Duração</h6>
                <p className="text-center">{formatRuntime(runtime)}</p>
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
      <div className="pt-8">
        <h3 className="text-2xl font-bold pb-4 px-8 lg:px-0">
          Elenco principal
        </h3>
        <div className="flex flex-wrap px-8 gap-4 justify-around sm:justify-center md:justify-start lg:px-0">
          {cast.map((actor, i) => {
            if (i <= 7) {
              return (
                <CastCard
                  character={actor.character}
                  id={actor.id}
                  name={actor.name}
                  profile_path={actor.profile_path}
                  key={actor.id}
                />
              )
            }
          })}
        </div>
        <Link
          to={'/'}
          className="block text-lg font-bold px-8 pt-4 hover:text-white transition-colors duration-150 md:justify-start lg:px-0"
        >
          Ver mais →
        </Link>
      </div>
    </div>
  )
}

export default TvAndMovieInfos

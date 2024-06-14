import { Link, useParams } from 'react-router-dom'
import Loader from './Loader'

import './styles.css'

import {
  genre,
  useGetMovieCreditsQuery,
  useGetMovieQuery
} from '../services/api'
import { useEffect, useState } from 'react'
import CastCard from './CastCard'

const InfosPage = () => {
  const [image, setImage] = useState('')
  const [backdrop, setBackdrop] = useState('')
  const { id } = useParams()
  const { data } = useGetMovieQuery(String(id))
  const { data: creditos } = useGetMovieCreditsQuery(String(id))

  console.log(creditos)

  useEffect(() => {
    if (data) {
      fetch(`https://image.tmdb.org/t/p/w500${data.poster_path}`).then((resp) =>
        setImage(resp.url)
      )
    }
  }, [data])
  useEffect(() => {
    if (data) {
      fetch(
        `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}`
      ).then((resp) => setBackdrop(resp.url))
    }
  }, [data])

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

  if (data) {
    return (
      <div className="w-full h-full xl:px-8 ">
        <div className="relative w-full h-full xl:p-8 xl:flex xl:text-white">
          <div className="w-full p-6 flex justify-center xl:justify-start xl:p-0 xl:w-fit ">
            <img
              src={image}
              alt=""
              className="max-h-60 h-full xl:min-w-80 xl:max-w-96 xl:w-full xl:max-h-520 xl:rounded-2xl"
            />
          </div>
          <div className="font-jockey flex flex-col items-center pt-4 px-8 xl:items-start">
            <h2 className="text-4xl">{data.title}</h2>
            <p className="hidden xl:block pt-4">
              {data.release_date} (br) - {formatGenres(data.genres)} -{' '}
              {formatRuntime(data.runtime)}
            </p>
            <div className="flex items-center text-2xl pt-8 gap-6">
              <span className="border-2 border-emerald-600 rounded-full p-4 xl:py-3 xl:px-2">
                {Math.round(data.vote_average * 10)}%
              </span>
              <p className="h-fit">Classificação dos usuários</p>
            </div>
            <div className="pt-8 text-xl xl:order-2">
              <p className="text-center text-gray-600 xl:text-start xl:text-slate-300">
                {data.tagline}
              </p>
              <h4 className="text-2xl pt-4">Sinopse</h4>
              <p className="pt-4">
                {data.overview != '' ? data.overview : 'Não informado'}
              </p>
            </div>
            <section className="flex flex-wrap justify-between mt-10 p-4 bg-white rounded-2xl gap-8 xl:order-1 xl:max-w-50 xl:bg-movie-infos">
              <span className="flex flex-col inline-block">
                <h6 className="text-center">Titulo original</h6>
                <p className="text-center">{data.original_title}</p>
              </span>
              <span>
                <h6 className="text-center">Estado</h6>
                <p className="text-center">{data.status}</p>
              </span>
              <span>
                <h6 className="text-center">Idioma original</h6>
                <p className="text-center">{data.original_language}</p>
              </span>
              <span className="xl:hidden">
                <h6 className="text-center">Lançamento</h6>
                <p className="text-center">{data.release_date}</p>
              </span>
              <span className="xl:hidden">
                <h6 className="text-center">Gênero</h6>
                <p className="text-center">{formatGenres(data.genres)}</p>
              </span>
              <span>
                <h6 className="text-center">Faturamento</h6>
                <p className="text-center">
                  {' '}
                  {data.revenue != 0
                    ? `U$ ${new Intl.NumberFormat().format(data.revenue)}`
                    : 'Não informado'}
                </p>
              </span>
              <span>
                <h6 className="text-center">Orçamento</h6>
                <p className="text-center">
                  {data.budget != 0
                    ? `U$ ${new Intl.NumberFormat().format(data.budget)}`
                    : 'Não informado'}
                </p>
              </span>
              <span className="xl:hidden">
                <h6 className="text-center">Duração</h6>
                <p className="text-center">{formatRuntime(data.runtime)}</p>
              </span>
            </section>
          </div>
          <img
            src={backdrop}
            alt=""
            className="-z-9 w-full max-h-72 h-full absolute top-0 left-0 bg-body object-cover xl:rounded-3xl xl:block xl:max-h-none"
          />
          <div className="-z-9 w-full max-h-72 h-full absolute top-0 left-0 bg-hover-card-black xl:rounded-3xl xl:block xl:max-h-none"></div>
        </div>
        <div className="pt-8 px-8">
          <h3 className="text-2xl font-bold pb-4">Elenco principal</h3>
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {creditos?.cast.map((actor, i) => {
              if (i <= 5) {
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
            className="flex w-full text-lg font-bold pt-4 hover:text-white transition-colors duration-150 md:justify-start lg:justify-start"
          >
            Ver mais →
          </Link>
        </div>
      </div>
    )
  }
  return <Loader />
}

export default InfosPage

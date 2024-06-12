import { useParams } from 'react-router-dom'

import emma from '../assets/images/emma_stone.png'
import hiroki from '../assets/images/hiroyuki_sanada.png'
import keanu from '../assets/images/keanu_reeves.png'
import sydney from '../assets/images/sydney_sweeney.png'
import timothe from '../assets/images/timothe_chalamet.png'
import './styles.css'

import { useGetMovieQuery } from '../services/api'
import { useEffect, useState } from 'react'

const InfosPage = () => {
  const { id } = useParams()
  const [image, setImage] = useState('')
  const { data } = useGetMovieQuery(String(id))

  useEffect(() => {
    fetch(`https://image.tmdb.org/t/p/w500${data?.poster_path}`).then((resp) =>
      setImage(resp.url)
    )
  }, [data?.poster_path])

  if (data) {
    return (
      <div className="pt-9 px-8 lg:ps-14 lg:px-5 ">
        <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-8">
          <div className="min-w-350">
            <img src={image} alt="" className="rounded-xl" />
          </div>
          <section className="flex flex-col pt-4 text-white lg:pt-0">
            <h2 className="text-3xl font-bold text-center lg:text-start">
              {data.title}
            </h2>
            <p className="pt-4 hidden lg:block lg:pt-2 font-bold">
              {`${data.release_date} - ${data.genres.map((genre) => ` ${genre.name}`)} - ${data.runtime}mins`}
            </p>

            <ul className="flex justify-between order-last gap-x-6 gap-y-3 flex-wrap p-4 mt-8 max-w-md bg-movie-infos rounded-3xl lg:mt-4 lg:justify-start lg:order-none">
              <li className="min-w-113">
                <h6 className="font-bold">Titulo original</h6>
                <p>{data.original_title}</p>
              </li>
              <li className="min-w-113">
                <h6 className="font-bold">Idioma original</h6>
                <p>{data.original_language}</p>
              </li>
              <li className="min-w-113">
                <h6 className="font-bold">Estado</h6>
                <p>{data.status}</p>
              </li>
              <li className="min-w-113">
                <h6 className="font-bold">Orçamento</h6>
                <p>${data.budget}</p>
              </li>
              <li className="min-w-113">
                <h6 className="font-bold">Faturamento</h6>
                <p>${data.revenue}</p>
              </li>
              <li className="min-w-113 lg:hidden">
                <h6 className="font-bold">Lançamento</h6>
                <p>{data.release_date}</p>
              </li>
              <li className="min-w-113 lg:hidden">
                <h6 className="font-bold ">Gênero</h6>
                <p>{data.genres.map((genre) => ` ${genre.name}`)}</p>
              </li>
              <li className="min-w-113 lg:hidden">
                <h6 className="font-bold ">Duração</h6>
                <p>{data.runtime}mins</p>
              </li>
            </ul>
            <span className="pt-10 lg:pt-4">
              <p
                className="text-center text-gray-400 font-bold text-lg lg:text-start"
                role="quote"
              >
                {data.tagline}
              </p>
              <h4 className="text-xl font-bold pt-4">Sinopse</h4>
              <p className="pt-4">{data.overview}</p>
            </span>
          </section>
        </div>
        <div className="pt-8">
          <h3 className="text-2xl text-white font-bold pb-4">
            Elenco principal
          </h3>
          <div className="container-scroll flex gap-4 overflow-x-scroll pb-2 min-w-full">
            <div className="relative min-w-64">
              <img src={timothe} alt="" className="rounded-t-xl" />
              <div className="absolute bottom-0 left-0 py-4 w-full h-1/4 bg-card-person-name">
                <p className="text-center text-lg font-bold text-white">
                  Timothée Chalamet
                </p>
                <p className="text-center font-bold pt-2 text-white">
                  Paul Atreides
                </p>
              </div>
            </div>
            <div className="relative min-w-64">
              <img src={emma} alt="" className="rounded-t-xl" />
              <div className="absolute bottom-0 left-0 py-4 w-full h-1/4 bg-card-person-name">
                <p className="text-center text-lg font-bold text-white">
                  Timothée Chalamet
                </p>
                <p className="text-center font-bold pt-2 text-white">
                  Paul Atreides
                </p>
              </div>
            </div>
            <div className="relative min-w-64">
              <img src={hiroki} alt="" className="rounded-t-xl" />
              <div className="absolute bottom-0 left-0 py-4 w-full h-1/4 bg-card-person-name">
                <p className="text-center text-lg font-bold text-white">
                  Timothée Chalamet
                </p>
                <p className="text-center font-bold pt-2 text-white">
                  Paul Atreides
                </p>
              </div>
            </div>
            <div className="relative min-w-64">
              <img src={keanu} alt="" className="rounded-t-xl" />
              <div className="absolute bottom-0 left-0 py-4 w-full h-1/4 bg-card-person-name">
                <p className="text-center text-lg font-bold text-white">
                  Timothée Chalamet
                </p>
                <p className="text-center font-bold pt-2 text-white">
                  Paul Atreides
                </p>
              </div>
            </div>
            <div className="relative min-w-64">
              <img src={sydney} alt="" className="rounded-t-xl" />
              <div className="absolute bottom-0 left-0 py-4 w-full h-1/4 bg-card-person-name">
                <p className="text-center text-lg font-bold text-white">
                  Timothée Chalamet
                </p>
                <p className="text-center font-bold pt-2 text-white">
                  Paul Atreides
                </p>
              </div>
            </div>
            <div className="relative min-w-64">
              <img src={sydney} alt="" className="rounded-t-xl" />
              <div className="absolute bottom-0 left-0 py-4 w-full h-1/4 bg-card-person-name">
                <p className="text-center text-lg font-bold text-white">
                  Timothée Chalamet
                </p>
                <p className="text-center font-bold pt-2 text-white">
                  Paul Atreides
                </p>
              </div>
            </div>
            <div className="relative min-w-64">
              <img src={sydney} alt="" className="rounded-t-xl" />
              <div className="absolute bottom-0 left-0 py-4 w-full h-1/4 bg-card-person-name">
                <p className="text-center text-lg font-bold text-white">
                  Timothée Chalamet
                </p>
                <p className="text-center font-bold pt-2 text-white">
                  Paul Atreides
                </p>
              </div>
            </div>
            <div className="relative min-w-64">
              <img src={sydney} alt="" className="rounded-t-xl" />
              <div className="absolute bottom-0 left-0 py-4 w-full h-1/4 bg-card-person-name">
                <p className="text-center text-lg font-bold text-white">
                  Timothée Chalamet
                </p>
                <p className="text-center font-bold pt-2 text-white">
                  Paul Atreides
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return <h3>Carregando...</h3>
}

export default InfosPage

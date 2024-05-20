import { ResultMovies, ResultTv, ResultPerson } from '../services/api'

export const carouseulTvMovies = (dados: ResultMovies[] | ResultTv[]) => {
  const slidesCarousel = []
  return dados.map((i) => {
    const image = i.poster_path
    const id = i.id

    return { image, id }
  })

  return slidesCarousel
}

export const carouseulPersons = (dados: ResultPerson[]) => {
  const slidesCarousel = []
  return dados.map((i) => {
    const image = i.profile_path
    const id = i.id

    return { image, id }
  })

  return slidesCarousel
}

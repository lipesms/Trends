import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type ResultMovies = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  name?: string
  profile_path?: string
}

export type ResultTv = {
  adult: boolean
  backdrop_path: string
  first_air_date: string
  genre_ids: number[]
  id: number
  media_type: string
  name: string
  original_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
  profile_path?: string
}

export type ResultPerson = {
  adult: boolean
  gender: number
  id: number
  known_for: KnowFor[]
  known_for_department: string
  media_type: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  poster_path?: string
}

export type KnowFor = {
  backdrop_path: string
  id: number
  original_title?: string
  name?: string
  overview: string
  poster_path: string
  media_type: string
  adult: boolean
  title: string
  original_language: string
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type Populares = {
  page: number
  results: ResultMovies[]
}

export type PopularesTv = {
  page: number
  results: ResultTv[]
}
export type PopularesPerson = {
  page: number
  results: ResultPerson[]
}

type genre = {
  id: number
  name: string
}

type productionCompany = {
  id: number
  logo_path: string
  name: string
  original_contry: string
}

type productionContry = {
  iso_3166_1: string
  name: string
}

type spokenLanguage = {
  english_name: string
  iso_639_1: string
  name: string
}

type Content = {
  adult: boolean
  backdrop_path: string
  budget: number
  genres: genre[]
  homepage: string
  id: number
  imdb_id: string
  original_contry: string[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: productionCompany[]
  productions_countries: productionContry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: spokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    prepareHeaders: (headers) => {
      const token =
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWNiYTRiNTNjNTI1M2IxY2I1MmMxZWJkN2QyNDcxZSIsInN1YiI6IjY2MWYwNTMzMjBhZjc3MDE2NDNkYWFlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sY2t9sNETOYwp97ZJ8YFAKVTJmp306FWb0ZZazvvTuo'

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query<Populares, void>({
      query: () => '/trending/movie/day?language=pt-BR&page=1'
    }),
    getPopularTv: builder.query<PopularesTv, void>({
      query: () => '/trending/tv/day?language=pt-BR'
    }),
    getPopularPerson: builder.query<PopularesPerson, void>({
      query: () => '/trending/person/day?language=pt-BR'
    }),
    getMovie: builder.query<Content, string>({
      query: (s) => `/movie/${s}?language=pt-BR`
    })
  })
})

export const {
  useGetPopularMoviesQuery,
  useGetPopularTvQuery,
  useGetPopularPersonQuery,
  useGetMovieQuery
} = api

export default api

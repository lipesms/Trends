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
}

export type ResultPerson = {
  adult: boolean
  gender: number
  id: number
  known_for: string[]
  known_for_department: string
  media_type: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
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
    })
  })
})

export const {
  useGetPopularMoviesQuery,
  useGetPopularTvQuery,
  useGetPopularPersonQuery
} = api

export default api

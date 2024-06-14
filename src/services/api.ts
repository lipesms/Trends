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

export type genre = {
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

type ContentMovie = {
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

type Created_by = {
  id: number
  credit_id: number
  name: string
  original_name: string
  gender: number
  profile_path: string
}

type last_episode_to_air = {
  id: number
  overview: string
  name: string
  vote_average: number
  vote_count: number
  air_date: string
  episode_number: number
  episode_type: string
  production_code: string
  runtime: number
  season_number: number
  show_id: number
  still_path: string
}

type Network = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

type Production_compani = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

type Production_country = {
  iso_3166_1: string
  name: string
}

type Season = {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
  vote_average: number
}

type Spoken_language = {
  english_name: string
  iso_639_1: string
  name: string
}

type ContentTv = {
  adult: boolean
  backdrop_path: string
  created_by: Created_by[]
  episode_run_time: number[]
  first_air_date: string
  genres: genre[]
  homepage: string
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: last_episode_to_air[]
  name: string
  next_episode_to_air: string
  network: Network[]
  number_of_episodes: number
  number_of_seasons: number
  original_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: Production_compani[]
  production_countries: Production_country[]
  seasons: Season[]
  spoken_languages: Spoken_language[]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
}

export type Cast = {
  adult: boolean
  gender: number
  id: number
  know_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id?: number
  character: string
  credit_id: string
  order: number
}

type Crew = {
  adult: boolean
  gender: number
  id: number
  know_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  credit_id: string
  department: string
  job: string
}

type ResultCredits = {
  id: number
  cast: Cast[]
  crew: Crew[]
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
    getMovie: builder.query<ContentMovie, string>({
      query: (s) => `/movie/${s}?language=pt-BR`
    }),
    getMovieCredits: builder.query<ResultCredits, string>({
      query: (s) => `/movie/${s}/credits?language=pt-BR`
    }),
    getTv: builder.query<ContentTv, string>({
      query: (s) => `/tv/${s}?language=pt-BR`
    }),
    getTvCredits: builder.query<ResultCredits, string>({
      query: (s) => `/tv/${s}/credits?language=pt-BR`
    })
  })
})

export const {
  useGetPopularMoviesQuery,
  useGetPopularTvQuery,
  useGetPopularPersonQuery,
  useGetMovieQuery,
  useGetMovieCreditsQuery,
  useGetTvQuery,
  useGetTvCreditsQuery
} = api

export default api

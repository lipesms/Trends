import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
    }),
    getFamous: builder.query<FamousContent, string>({
      query: (s) => `/person/${s}?language=pt-BR`
    }),
    getFamousMoviesCredits: builder.query<MovieCredits, string>({
      query: (s) => `/person/${s}/movie_credits?language=pt-BR`
    }),
    getFamousTvCredits: builder.query<tvCredits, string>({
      query: (s) => `/person/${s}/tv_credits?language=pt-BR`
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
  useGetTvCreditsQuery,
  useGetFamousQuery,
  useGetFamousMoviesCreditsQuery,
  useGetFamousTvCreditsQuery
} = api

export default api

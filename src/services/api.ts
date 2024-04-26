import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Populares = {
  page: number
  results: [
    {
      adult: boolean
      backdropPath: string
      genre_ids: number[]
      id: number
      originalLanguage: string
      originalTitla: string
      overview: string
      popularity: number
      posterPath: string
      releaseDate: string
      title: string
      video: boolean
      voteAverage: number
      votecount: number
    }
  ]
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://api.themoviedb.org/3/trending/movie/week?language=pt-BR&page=1',
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
    getPopularMovies: builder.query<Populares[], void>({
      query: () => ''
    })
  })
})

export const { useGetPopularMoviesQuery } = api

export default api

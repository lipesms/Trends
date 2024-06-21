declare type ResultMovies = {
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

declare type ResultTv = {
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

declare type ResultPerson = {
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
  character?: string
}

declare type KnowFor = {
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

declare type Populares = {
  page: number
  results: ResultMovies[]
}

declare type PopularesTv = {
  page: number
  results: ResultTv[]
}
declare type PopularesPerson = {
  page: number
  results: ResultPerson[]
}

declare type genre = {
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

type FamousContent = {
  adult: boolean
  also_known_as: string[]
  biography: string
  birthday: string
  deathday: string
  gender: number
  homepage: string
  id: number
  imdb_id: string
  known_for_department: string
  name: string
  place_of_birth: string
  popularity: number
  profile_path: string
}

type tvCredits = {
  cast: TvCast[]
  crew: TvCrew[]
  id: number
}

declare type TvCast = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  first_air_date: string
  name: string
  vote_average: number
  vote_count: number
  character: string
  credit_id: string
  episode_count: string
}

type TvCrew = {
  adult: false
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  first_air_date: string
  name: string
  vote_average: number
  vote_count: number
  credit_id: string
  department: string
  episode_count: number
  job: string
}

type MovieCredits = {
  cast: MoviesCast[]
  crew: MoviesCrew[]
  id: number
}

declare type MoviesCast = {
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
  character: string
  credit_id: string
  order: number
}

type MoviesCrew = {
  adult: boolean
  backdrop_path: string
  genres_id: number[]
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
  credit_id: string
  department: string
  job: string
}

declare type Cast = {
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
  known_for?: KnowFor[]
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

declare type UpComing = {
  dates: {
    maximum: string
    minimum: string
  }
  page: number
  results: ResultMovies[]
}

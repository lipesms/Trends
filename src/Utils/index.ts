export const checkPopularPersonItems = (persons: ResultPerson[] | Cast[]) => {
  return persons.filter((person) => person.profile_path)
}

export const checkPopularTvItems = (series: ResultTv[] | TvCast[]) => {
  return series.filter((serie) => serie.poster_path)
}

export const checkPopularMovieItems = (
  movies: ResultMovies[] | MoviesCast[]
) => {
  return movies.filter((movie) => movie.poster_path)
}

export const formatGenres = (genres: genre[]) => {
  const genresNames = genres.map((genre) => genre.name)
  const firstsGenres = genresNames.slice(0, 2)
  return firstsGenres.join(', ')
}

export const formatRuntime = (runtime: number) => {
  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60

  return `${hours}h ${minutes}m`
}

export const setVoteAverageColor = (vote: number) => {
  if (vote >= 70) {
    return 'border-green-500'
  } else if (vote >= 50) {
    return 'border-amber-500'
  }
  return 'border-orange-900'
}

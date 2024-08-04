export const checkPopularPersonItems = (persons: ResultPerson[]) => {
  const blacklist = [
    3164807, 2710789, 3194176, 2472212, 2093355, 1622390, 1781425, 2349944,
    2484644,1708576, 1688124
  ]
  return persons.filter(
    (person) => person.profile_path && !blacklist.includes(person.id)
  )
}
export const checkPopularPersonCastItems = (personsCast: Cast[]) => {
  return personsCast.filter((person) => person.profile_path)
}

export const checkPopularTvItems = (series: ResultTv[]) => {
  return series.filter((serie) => serie.poster_path)
}

export const checkPopularTvCastItems = (seriesCast: TvCast[]) => {
  return seriesCast.filter((serie) => serie.poster_path)
}

export const checkPopularMovieItems = (movies: ResultMovies[]) => {
  return movies.filter((movie) => movie.poster_path)
}

export const checkPopularMovieCastItems = (moviesCast: MoviesCast[]) => {
  return moviesCast.filter((movie) => movie.poster_path)
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

export const ordPopularFamous = (famous: ResultPerson[]) => {
  return famous.slice().sort((a, b) => b.popularity - a.popularity)
}
export const ordFamousMoviesCredits = (famous: MoviesCast[]) => {
  return famous.slice().sort((a, b) => b.popularity - a.popularity)
}
export const ordFamousTvCredits = (famous: TvCast[]) => {
  return famous.slice().sort((a, b) => b.popularity - a.popularity)
}

export const removeDuplicatedSeries = (array: TvCast[]) => {
  const matchingIds: number[] = []
  const result: TvCast[] = []

  array.forEach((serie) => {
    const id = serie.id
    if (!matchingIds.includes(id)) {
      matchingIds.push(id)
      result.push(serie)
    }
  })
  return result
}

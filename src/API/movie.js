const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
}

const fetchFromTMDB = async (path, params = "") => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3${path}?${params}`, options)
    return await response.json()
  } catch (error) {
    console.error(`API 호출 에러 (${path}):`, error)
  }
}

export const getPopularMovies = async () => {
  const data = await fetchFromTMDB("/movie/popular")
  return data.results.filter((movie) => !movie.adult)
}

export const getMovieDetail = async (movieId) => {
  const koreanData = await fetchFromTMDB(
    `/movie/${movieId}`,
    "language=ko-KR&append_to_response=images&include_image_language=ko,en,null",
  )

  if (!koreanData.overview || koreanData.overview === "") {
    const enData = await fetchFromTMDB(`/movie/${movieId}`, "language=en-US")
    return { ...koreanData, overview: enData.overview }
  }

  return koreanData
}

export const searchMovies = async (query) => {
  const data = await fetchFromTMDB("/search/movie", `query=${query}&language=ko-KR&page=1`)
  return data.results.filter((movie) => !movie.adult)
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
}

export const getPopularMovies = async () => {
  try {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular", options)
    if (!response.ok) {
      throw new Error("네트워크 에러 발생")
    }
    const data = await response.json()
    const filteredData = data.results.filter((movie) => movie.adult === false)
    return filteredData
  } catch (error) {
    console.error("데이터 받아오기 에러:", error)
  }
}

export const getMovieDetail = async (movieId) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("상세 정보 호출 에러:", error)
  }
}

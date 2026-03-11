import { useState, useEffect } from "react"
import { getPopularMovies } from "../API/movie"

const usePopularMoviesStore = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopularMovies()
        setMovies(data)
      } catch (error) {
        console.error("데이터 로딩 실패:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchMovies()
  }, [])

  return { movies, loading }
}

export default usePopularMoviesStore

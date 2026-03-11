import { useEffect, useState } from "react"
import { useSearchParams } from "react-router"
import MovieCard from "../components/movie/MovieCard"
import { searchMovies } from "../API/movie"
import SearchSkeleton from "../components/skeleton/SearchSkeleton"

const Search = () => {
  const [searchParams] = useSearchParams()
  const param = searchParams.get("movie") ?? ""

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!param) {
      setMovies([])
      return
    }

    const fetchSearch = async () => {
      setLoading(true)
      try {
        const results = await searchMovies(param)
        setMovies(results)
      } catch (error) {
        console.error("Search error:", error)
      } finally {
        setLoading(false)
      }
    }
    window.scrollTo(0, 0)

    fetchSearch()
  }, [param])

  if (loading) return <SearchSkeleton />

  if (movies.length === 0) return <p>검색 결과가 없습니다.</p>

  return (
    <>
      <h2 className="text-2xl font-bold mb-8">검색 결과</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movieData={movie} />
        ))}
      </div>
    </>
  )
}

export default Search

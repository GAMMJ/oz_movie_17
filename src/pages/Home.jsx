import { useState, useEffect } from "react"
import { SwiperSlide } from "swiper/react"
import MovieCard from "../components/movie/MovieCard.jsx"
import SwiperMovie from "../components/ui/SwiperMovie.jsx"
import { getPopularMovies } from "../API/movie"

const Home = () => {
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

  if (loading) {
    return <div className="text-white text-center mt-20">로딩 중...</div>
  }

  return (
    <>
      <section className="mb-8 relative">
        <SwiperMovie>
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </SwiperSlide>
          ))}
        </SwiperMovie>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movieData={movie} />
        ))}
      </div>
    </>
  )
}

export default Home

import { useParams } from "react-router"
import MovieDetail from "../components/movie/MovieDetail"
import { useEffect, useState } from "react"
import { getMovieDetail } from "../API/movie"
import DetailSkeleton from "../components/skeleton/DetailSkeleton"

const Detail = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    const fetchMovie = async () => {
      const data = await getMovieDetail(movieId)
      setMovie(data)
    }
    fetchMovie()
  }, [movieId])

  if (!movie) return <DetailSkeleton />

  return (
    <div className="mb-8">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(7px) brightness(0.3)",
          transform: "scale(1.1)",
        }}
      />
      <div className="relative z-10 px-8 py-12 max-w-6xl mx-auto">
        <MovieDetail movie={movie} />
      </div>
    </div>
  )
}

export default Detail

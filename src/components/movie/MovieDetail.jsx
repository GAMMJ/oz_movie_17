import { useState, useEffect } from "react"
import { getMovieDetail } from "../../API/movie"

const MovieDetail = ({ movieId }) => {
  const [movieDetail, setMovieDetail] = useState(null)

  useEffect(() => {
    const fetchDetail = async () => {
      const data = await getMovieDetail(movieId)
      setMovieDetail(data)
    }
    fetchDetail()
  }, [movieId])

  if (!movieDetail) return <div>로딩 중...</div>

  return (
    <div className="flex flex-col items-center gap-8 md:flex-row">
      <div>
        <img
          className="w-full"
          src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}
          alt={movieDetail.title}
        />
      </div>
      <div className="flex flex-col gap-4 md:w-1/2 text-white">
        <div className="flex items-center">
          <h1 className="flex-2">{movieDetail.title}</h1>
          <p className="flex-1">평점 : {movieDetail.vote_average}</p>
        </div>
        <p>{movieDetail.genres.map((genre) => genre.name).join(", ")}</p>
        <p className="break-keep">{movieDetail.overview}</p>
      </div>
    </div>
  )
}

export default MovieDetail

import { Link } from "react-router"
import useLazyImage from "../../hooks/useLazyImage"

const MovieCard = ({ movieData }) => {
  const imgRef = useLazyImage()
  const rating = movieData?.vote_average

  return (
    <Link to={`/details/${movieData.id}`}>
      <div className="flex flex-col bg-[#202020] text-[#e0e0e0] rounded-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] overflow-hidden hover:scale-102 transition-transform duration-300">
        <div className="overflow-hidden aspect-2/3">
          <img
            ref={imgRef}
            data-src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            src={null}
            alt={movieData.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex flex-col grow">
          <h2 className="text-md font-bold line-clamp-2 mb-2 min-h-12">{movieData.title}</h2>
          <p>평점 : {rating != null ? rating.toFixed(1) : "N/A"}</p>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard

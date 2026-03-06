import { Link } from "react-router"

const MovieCard = ({ movieData }) => {
  return (
    <Link to={`/details/${movieData.id}`}>
      <div className="flex flex-col bg-white rounded-xl overflow-hidden hover:scale-102 transition-transform duration-300">
        <div className="overflow-hidden aspect-2/3">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={movieData.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex flex-col grow">
          <h2 className="text-md font-bold text-gray-900 line-clamp-2 mb-2 min-h-12">{movieData.title}</h2>
          <p>평점 : {movieData.vote_average}</p>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard

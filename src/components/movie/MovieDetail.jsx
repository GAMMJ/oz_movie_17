const MovieDetail = ({ movie }) => {
  const logo =
    movie?.images?.logos?.find((l) => l.iso_639_1 === "ko") ||
    movie?.images?.logos?.find((l) => l.iso_639_1 === "en") ||
    movie?.images?.logos?.[0]

  return (
    <div className="flex flex-col md:flex-row items-start gap-8">
      <div>
        <img
          className="min-w-90 w-full max-w-90 shrink-0 object-cover rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_8px_rgba(255,255,255,0.05)]"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className="flex flex-col flex-1 items-end gap-20 text-white">
        <div className="flex flex-col items-end gap-4">
          {logo ? (
            <img
              className="h-24 md:h-32"
              src={`https://image.tmdb.org/t/p/original${logo.file_path}`}
              alt={movie.title}
            />
          ) : (
            <h2 className="text-2xl font-bold">{movie.title}</h2>
          )}

          <div className="w-full flex justify-end items-center gap-2">
            <p>⭐ {movie.vote_average.toFixed(1)}</p>
            <p className="text-gray-300">{movie.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>

        <div className="w-full flex flex-col items-end gap-3">
          <p className="text-[18px] font-semibold">소개</p>
          <p className="break-keep text-right text-gray-200">{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail

const MovieDetail = ({ movie }) => {
  const logo =
    movie?.images?.logos?.find((l) => l.iso_639_1 === "ko") ||
    movie?.images?.logos?.find((l) => l.iso_639_1 === "en") ||
    movie?.images?.logos?.[0]

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
      <div className="w-full md:w-auto flex justify-center">
        <img
          className="w-65 sm:w-85 md:w-80 lg:w-90 shrink-0 object-cover rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_8px_rgba(255,255,255,0.05)]"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className="flex flex-col flex-1 items-center md:items-end gap-10 md:gap-20 w-full">
        <div className="flex flex-col items-center md:items-end gap-4 w-full">
          {logo ? (
            <img
              className="h-16 sm:h-24 md:h-32 object-contain"
              src={`https://image.tmdb.org/t/p/original${logo.file_path}`}
              alt={movie.title}
            />
          ) : (
            <h2 className="text-2xl md:text-4xl font-bold text-center md:text-right">{movie.title}</h2>
          )}

          <div className="w-full flex justify-center md:justify-end items-center gap-3 text-sm md:text-base">
            <p className="flex items-center gap-1">
              <span className="text-yellow-400">⭐</span> {movie.vote_average.toFixed(1)}
            </p>
            <p className="text-gray-400 dark:text-gray-400">|</p>
            <p className="text-gray-900 dark:text-gray-300">{movie.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center md:items-end gap-3">
          <p className="text-[18px] md:text-[20px] font-semibold">소개</p>
          <p className="break-keep text-center md:text-right text-gray-900 dark:text-gray-300 leading-relaxed max-w-2xl">
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail

import MovieCard from "../components/MovieCard"
import movieListData from "../data/movieListData.json"
import SwiperMovie from "../util/SwiperMovie.jsx"

const Home = () => {
  return (
    <>
      <section className="mb-8 relative">
        <SwiperMovie movies={movieListData.results} />
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {movieListData.results.map((movie) => (
          <MovieCard key={movie.id} movieData={movie} />
        ))}
      </div>
    </>
  )
}

export default Home

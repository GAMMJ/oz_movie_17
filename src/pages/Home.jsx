import { SwiperSlide } from "swiper/react"
import MovieCard from "../components/movie/MovieCard.jsx"
import SwiperMovie from "../components/ui/SwiperMovie.jsx"
import HomeSkeleton from "../components/skeleton/HomeSkeleton.jsx"
import useLazyImage from "../hooks/useLazyImage.js"
import usePopularMoviesStore from "../store/popularMovies"

const Home = () => {
  const { movies, loading } = usePopularMoviesStore()

  if (loading) return <HomeSkeleton />

  return (
    <>
      <h2 className="text-2xl font-bold mb-5 mt-9">인기 영화 🔥</h2>
      <section className="mb-15 p-8 relative bg-gray-100 dark:bg-linear-to-b dark:from-black dark:to-[#0f0f0f] rounded-4xl transition-colors duration-300">
        <SwiperMovie>
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <SwiperItem movie={movie} />
            </SwiperSlide>
          ))}
        </SwiperMovie>
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movieData={movie} />
        ))}
      </div>
    </>
  )
}

const SwiperItem = ({ movie }) => {
  const imgRef = useLazyImage()

  return (
    <div className="aspect-2/3 rounded-lg overflow-hidden shadow-lg">
      <img
        ref={imgRef}
        data-src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        src={null}
        alt={movie.title}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default Home

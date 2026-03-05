import { useParams } from "react-router"
import MovieDetail from "../components/MovieDetail"

const Detail = () => {
  const { movieId } = useParams()

  return (
    <div>
      <MovieDetail movieId={movieId} />
    </div>
  )
}

export default Detail

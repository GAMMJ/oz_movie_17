import { Routes, Route } from "react-router"
import Layout from "./components/layout/Layout"
import { lazy, Suspense } from "react"
import HomeSkeleton from "./components/skeleton/HomeSkeleton"
import DetailSkeleton from "./components/skeleton/DetailSkeleton"
import Search from "./pages/Search"

const Detail = lazy(() => import("./pages/Detail"))
const Home = lazy(() => import("./pages/Home"))

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<HomeSkeleton />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/details/:movieId"
          element={
            <Suspense fallback={<DetailSkeleton />}>
              <Detail />
            </Suspense>
          }
        />
        <Route
          path="/search"
          element={
            <Suspense fallback={<HomeSkeleton />}>
              <Search />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
export default App

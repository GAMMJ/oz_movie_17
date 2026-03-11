import { Routes, Route } from "react-router"
import Layout from "./components/layout/Layout"
import { lazy, Suspense } from "react"
import { ThemeProvider } from "./context/ThemeContext"
import HomeSkeleton from "./components/skeleton/HomeSkeleton"
import DetailSkeleton from "./components/skeleton/DetailSkeleton"

const Detail = lazy(() => import("./pages/Detail"))
const Home = lazy(() => import("./pages/Home"))
const Search = lazy(() => import("./pages/Search"))
const Login = lazy(() => import("./pages/Login"))
const Signup = lazy(() => import("./pages/Signup"))

function App() {
  return (
    <ThemeProvider>
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
export default App

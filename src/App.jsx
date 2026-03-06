import { Routes, Route } from "react-router"
import Layout from "./components/layout/Layout"
import { lazy, Suspense } from "react"

const Detail = lazy(() => import("./pages/Detail"))
const Home = lazy(() => import("./pages/Home"))

function App() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/details/:movieId" element={<Detail />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App

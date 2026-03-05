import { Routes, Route } from "react-router"
import Detail from "./pages/Detail"
import Home from "./pages/Home"
import Layout from "./components/Layout"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/details/:movieId" element={<Detail />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
